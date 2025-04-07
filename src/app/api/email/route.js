import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Handles the POST request to send emails using SendGrid.
 *
 * @async
 * @function POST
 * @param {Request} req - The HTTP request object.
 * @returns {Promise<Response>} The HTTP response object.
 *
 * @throws {Response} Returns a 500 status response if an error occurs during email sending.
 *
 * @example
 * // Example request body:
 * const requestBody = {
 *   toAdmin: "admin@example.com",
 *   toSubmitter: "submitter@example.com",
 *   adminTemplateId: "d-1234567890abcdef1234567890abcdef",
 *   data: {
 *     name: "John Doe",
 *     message: "This is a test message."
 *   }
 * };
 *
 * // Example usage:
 * fetch('/api/email', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(requestBody)
 * })
 * .then(response => response.json())
 * .then(data => console.log(data))
 * .catch(error => console.error('Error:', error));
 */
export async function POST(req) {
  const request = await req.json();

  try {
    const { toAdmin, toSubmitter, adminTemplateId, data } = request;

    // Input validation
    if (!toAdmin) {
      return new Response(
        'Invalid request body. Required field {toAdmin} is missing.',
        { status: 400 }
      );
    }
    if (!toSubmitter) {
      return new Response(
        'Invalid request body. Required field {toSubmitter} is missing.',
        { status: 400 }
      );
    }
    if (!adminTemplateId) {
      return new Response(
        'Invalid request body. Required field {adminTemplateId} is missing.',
        { status: 400 }
      );
    }
    if (!data) {
      return new Response(
        'Invalid request body. Required field {data} is missing.',
        { status: 400 }
      );
    }

    // Sending emails
    let sendGridResponse;
    await new Promise((resolve) => {
      setTimeout(async () => {
        try {
          sendGridResponse = await sgMail.send({
            to: toAdmin,
            from: toAdmin,
            templateId: adminTemplateId,
            dynamicTemplateData: data,
          });
          resolve();
        } catch (error) {
          console.error('Error sending email:', error);
          sendGridResponse = error;
          resolve();
        }
      }, 2000);
    });

    return new Response(JSON.stringify({ sendGridResponse }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response('An error occurred while sending emails', {
      status: 500,
    });
  }
}
