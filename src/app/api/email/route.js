import fetch from 'node-fetch';
import Cors from 'cors';
import { runMiddleware } from '@/utils/cors';

const cors = Cors({
  methods: ['POST'],
});

async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const request = await req.json();
    console.log(request, 'request');

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
    };

    // Sending emails
    const sendgridResponse = await fetch(
      'https://api.sendgrid.com/v3/mail/send',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestData),
      }
    );

    // Log SendGrid response
    console.log(await sendgridResponse.json());

    // Success response
    return res.json({ success: true, status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json('An error occurred while sending emails');
  }
}

export { handler as POST };
