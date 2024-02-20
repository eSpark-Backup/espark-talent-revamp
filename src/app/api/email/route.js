import axios from 'axios';

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { toAdmin, toSubmitter, adminTemplateId, data } = req.body;

      // Input validation
      if (!toAdmin || !toSubmitter || !adminTemplateId || !data) {
        throw new Error('Invalid request body. Required fields are missing.');
      }

      // Define request data
      const requestData = {
        personalizations: [
          {
            to: [{ email: toAdmin }],
            dynamic_template_data: data,
          }
        ],
        from: { email: toSubmitter },
        template_id: adminTemplateId,
      };

      // Define headers
      const headers = {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      };

      // Sending emails
      await axios.post('https://api.sendgrid.com/v3/mail/send', requestData, { headers });

      // Success response
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending emails:', error);
      return res.status(500).json({ error: 'An error occurred while sending emails' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

export { handler as POST };
