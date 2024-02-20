import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  if (req.method !== 'POST') {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const request = await req.json();
    console.log(request, 'request');
    console.log(res, 'response');

    const { toAdmin, toSubmitter, adminTemplateId, data } =
      request;

    // Input validation
    if (
      !toAdmin ||
      !toSubmitter ||
      !adminTemplateId ||
      !data
    ) {
      throw new Error('Invalid request body. Required fields are missing.');
    }

    // Sending emails
    await Promise.all([
      sgMail.send({
        to: toAdmin,
        from: toAdmin,
        templateId: adminTemplateId,
        dynamicTemplateData: data,
      }),
    ]);

    // Success response
    return new Response({
      status: 200,
    });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response('An error occurred while sending emails', {
      status: 500,
    });
  }
}
export { handler as POST };
