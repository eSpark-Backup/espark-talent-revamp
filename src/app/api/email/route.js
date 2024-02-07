import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
async function handler(req, res) {
  const request = await req.json();

  console.log(res, 'respose');
  if (req.method === 'POST') {
    try {
      const {
        toAdmin,
        toSubmitter,
        adminTemplateId,
        submitterTemplateId,
        data,
      } = request;

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
      if (!submitterTemplateId) {
        throw new Error(
          'Invalid request body. Required fields {submitterTemplateId} are missing.'
        );
      }
      if (!data) {
        throw new Error(
          'Invalid request body. Required fields {data} are missing.'
        );
      }
      // Sending emails
      // await Promise.all([

      setTimeout(() => {
        sgMail.send({
          to: toAdmin,
          from: toAdmin,
          templateId: adminTemplateId,
          dynamicTemplateData: data,
        }),
          2000;
      });
      setTimeout(() => {
        sgMail.send({
          to: toSubmitter,
          from: toAdmin,
          templateId: submitterTemplateId,
          dynamicTemplateData: data,
        }),
          4000;
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
