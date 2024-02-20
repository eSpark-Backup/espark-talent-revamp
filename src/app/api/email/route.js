import axios from 'axios';

async function handler(req, res) {
  if (req.method !== 'POST') {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    Response.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const request = await req.json();
    console.log(request, 'request');
    console.log(res, 'response');

    const { toAdmin, adminTemplateId, data } = request;

    // Input validation
    if (!toAdmin || !adminTemplateId || !data) {
      throw new Error('Invalid request body. Required fields are missing.');
    }

    // Define request data
    const requestData = {
      personalizations: [
        {
          to: [{ email: toAdmin }],
          dynamic_template_data: data,
        },
      ],
      from: { email: toAdmin },
      template_id: adminTemplateId,
    };

    // Define headers
    const headers = {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
      'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    };

    // Sending emails
    await axios.post('https://api.sendgrid.com/v3/mail/send', requestData, {
      headers,
    });

    // Success response
    return new Response({ success: true, status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response('An error occurred while sending emails', {
      status: 500,
    });
  }
}

export { handler as POST };
