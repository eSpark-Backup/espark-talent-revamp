import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Handles incoming HTTP requests for sending emails with attachments.
 *
 * @async
 * @function handler
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.method - The HTTP method of the request.
 * @param {Function} req.json - A function to parse the JSON body of the request.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<Response>} A promise that resolves to an HTTP response.
 *
 * @throws {Error} Throws an error if required fields are missing in the request body.
 *
 * @description
 * This function processes POST requests to send emails with attachments using the SendGrid API.
 * It validates the request body to ensure all required fields are present, including:
 * - `toAdmin`: The email address of the admin recipient.
 * - `toSubmitter`: The email address of the submitter recipient.
 * - `adminTemplateId`: The template ID for the admin email.
 * - `data`: The dynamic template data for the email.
 * - `attachments`: An array of attachment objects.
 *
 * If the request is valid, it sends an email to the admin with the specified template and attachments.
 * If the request method is not POST, it responds with a 405 Method Not Allowed error.
 *
 * @example
 * // Example request body
 * {
 *   "toAdmin": "admin@example.com",
 *   "toSubmitter": "submitter@example.com",
 *   "adminTemplateId": "template-id",
 *   "data": { "key": "value" },
 *   "attachments": [
 *     {
 *       "content": "base64-encoded-content",
 *       "filename": "file.txt",
 *       "type": "text/plain",
 *       "disposition": "attachment"
 *     }
 *   ]
 * }
 */
async function handler(req, res) {
  const request = await req.json();
  console.log(res, 'Response');
  if (req.method === 'POST') {
    try {
      const { toAdmin, toSubmitter, adminTemplateId, data, attachments } =
        request;
      // Input validation
      if (!toAdmin) {
        throw new Error(
          'Invalid request body. Required fields {toadmin} is missing.'
        );
      }
      if (!toSubmitter) {
        throw new Error(
          'Invalid request body. Required fields {toSubmitter} are missing.'
        );
      }
      if (!adminTemplateId) {
        throw new Error(
          'Invalid request body. Required fields {adminTemplateId} are missing.'
        );
      }
      if (!data) {
        throw new Error(
          'Invalid request body. Required fields {data} are missing.'
        );
      }
      // Sending emails
      setTimeout(() => {
        sgMail.send({
          to: toAdmin,
          from: toAdmin,
          templateId: adminTemplateId,
          dynamicTemplateData: data,
          attachments: [
            {
              content: attachments[0]?.content,
              filename: attachments[0]?.filename,
              type: attachments[0]?.type,
              disposition: 'attachment',
            },
          ],
        }),
          2000;
      });

      // Success response
      return new Response(
        { success: true },
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error('Error sending emails:', error);
      return new Response('An error occurred while sending emails', {
        status: 500,
      });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    Response.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

export { handler as POST };
