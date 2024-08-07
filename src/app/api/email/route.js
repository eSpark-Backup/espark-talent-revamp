import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
