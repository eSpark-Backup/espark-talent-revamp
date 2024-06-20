import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';

config();

const s3Client = new S3Client({
  endpoint: process.env.END_POINT,
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.B2_APPLICATION_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
});

async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = await req?.formData();

    try {
      const file = formData.get('file');

      console.log(file, 'file');

      const buffer = await file.arrayBuffer();

      // Generate UUID for the file name
      const uuid = uuidv4();

      // Get the file extension
      const fileExtension = path.extname(file.name);

      // Construct the key with UUID and file extension
      const key = `${uuid}${fileExtension}`;
      console.log('before config');
      await s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.BUCKET_NAME,
          Key: key,
          Body: buffer,
        })
      );
      console.log('after config');

      return new Response(
        JSON.stringify({ Message: 'Success', fileKey: key }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Error uploading file:', error);
      return new Response(
        JSON.stringify({ Message: 'Failed to upload file' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    // });
  } else {
    res.setHeader('Allow', ['POST']);
    Response.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

export { handler as POST };
