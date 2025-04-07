import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';

config();

/**
 * Initializes an S3 client instance with the specified configuration.
 * 
 * @constant
 * @type {S3Client}
 * @description Configures the S3 client with the endpoint, region, and credentials
 * retrieved from environment variables.
 * 
 * Environment Variables:
 * - `NEXT_PUBLIC_END_POINT`: The endpoint URL for the S3 service.
 * - `NEXT_PUBLIC_REGION`: The region for the S3 service.
 * - `NEXT_PUBLIC_B2_APPLICATION_KEY_ID`: The access key ID for authentication.
 * - `NEXT_PUBLIC_B2_APPLICATION_KEY`: The secret access key for authentication.
 */
const s3Client = new S3Client({
  endpoint: process.env.NEXT_PUBLIC_END_POINT,
  region: process.env.NEXT_PUBLIC_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_B2_APPLICATION_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_B2_APPLICATION_KEY,
  },
});

/**
 * Handles file upload requests to the server.
 *
 * @async
 * @function handler
 * @param {Object} req - The HTTP request object.
 * @param {string} req.method - The HTTP method of the request.
 * @param {Function} req.formData - A function to retrieve form data from the request.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<Response>} A response object containing the status and message.
 *
 * @description
 * This function processes POST requests to upload a file to an S3 bucket. It extracts the file
 * from the request's form data, generates a unique identifier (UUID) for the file name, and
 * uploads the file to the specified S3 bucket. If the upload is successful, it returns a success
 * message along with the file key. If an error occurs, it returns an error message with a 500 status.
 *
 * @throws {Error} If the file upload fails or an unexpected error occurs.
 *
 * @example
 * // Example usage of the handler function
 * const req = {
 *   method: 'POST',
 *   formData: async () => {
 *     const formData = new FormData();
 *     formData.append('file', new File(['content'], 'example.txt'));
 *     return formData;
 *   },
 * };
 * const res = {};
 * handler(req, res).then(response => console.log(response));
 */
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
      await s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
          Key: key,
          Body: buffer,
        })
      );

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
        JSON.stringify({ Message: 'Failed to upload file', error }),
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
