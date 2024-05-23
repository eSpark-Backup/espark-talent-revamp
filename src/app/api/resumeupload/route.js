import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";
import { config } from 'dotenv';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';

config();

const s3Client = new S3Client({
    endpoint: process.env.END_POINT || 'https://s3.us-east-005.backblazeb2.com',
    region: process.env.REGION || 'us-east-005',
    credentials: {
        accessKeyId: process.env.B2_APPLICATION_KEY_ID || '005af8ef4030c480000000006',
        secretAccessKey: process.env.B2_APPLICATION_KEY || 'K005mrciRfuX4ZpPDnJixDVIeS1Sp48',
    },
});

export async function POST(req) {
    try {
        const formData = await req?.formData();

        const file = formData.get("file");

        console.log(file, "file");

        const buffer = await file.arrayBuffer()

        // Generate UUID for the file name
        const uuid = uuidv4();

        // Get the file extension
        const fileExtension = path.extname(file.name);

        // Construct the key with UUID and file extension
        const key = `${uuid}${fileExtension}`;


        await s3Client.send(
            new PutObjectCommand({
                Bucket: process.env.BUCKET_NAME || 'resumeportal',
                Key: key,
                Body: buffer,
            })
        );

        return NextResponse.json({ Message: "Success", fileKey:key }, { status: 201 });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ Message: "Failed" }, { status: 500 });
    }
};


