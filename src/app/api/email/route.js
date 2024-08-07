import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  console.log('Received request:', req.method);
  const request = await req.json();
  console.log('Request body:', request);

  try {
    const { toAdmin, toSubmitter, adminTemplateId, data } = request;
    console.log('Extracted data:', {
      toAdmin,
      toSubmitter,
      adminTemplateId,
      data,
    });

    // Input validation
    if (!toAdmin) {
      console.error('Missing toAdmin field');
      return new Response(
        'Invalid request body. Required field {toAdmin} is missing.',
        { status: 400 }
      );
    }
    if (!toSubmitter) {
      console.error('Missing toSubmitter field');
      return new Response(
        'Invalid request body. Required field {toSubmitter} is missing.',
        { status: 400 }
      );
    }
    if (!adminTemplateId) {
      console.error('Missing adminTemplateId field');
      return new Response(
        'Invalid request body. Required field {adminTemplateId} is missing.',
        { status: 400 }
      );
    }
    if (!data) {
      console.error('Missing data field');
      return new Response(
        'Invalid request body. Required field {data} is missing.',
        { status: 400 }
      );
    }

    // Sending emails
    console.log('Preparing to send email');
    let sendGridResponse;
    await new Promise((resolve) => {
      setTimeout(async () => {
        console.log('Sending email to admin');
        try {
          sendGridResponse = await sgMail.send({
            to: toAdmin,
            from: toAdmin,
            templateId: adminTemplateId,
            dynamicTemplateData: data,
          });
          console.log('Email sent successfully');
          resolve();
        } catch (error) {
          console.error('Error sending email:', error);
          sendGridResponse = error;
          resolve();
        }
      }, 2000);
    });

    // Log SendGrid API response
    console.log('SendGrid API response:', sendGridResponse);

    // Success response
    console.log('Sending response');
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
