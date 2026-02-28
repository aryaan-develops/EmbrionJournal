import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const B2_ENDPOINT = process.env.B2_ENDPOINT; // e.g., s3.us-west-004.backblazeb2.com
const B2_REGION = process.env.B2_REGION; // e.g., us-west-004
const B2_APPLICATION_KEY_ID = process.env.B2_APPLICATION_KEY_ID;
const B2_APPLICATION_KEY = process.env.B2_APPLICATION_KEY;
const B2_BUCKET_NAME = process.env.B2_BUCKET_NAME;

const s3Client = new S3Client({
    endpoint: `https://${B2_ENDPOINT}`,
    region: B2_REGION,
    credentials: {
        accessKeyId: B2_APPLICATION_KEY_ID!,
        secretAccessKey: B2_APPLICATION_KEY!,
    },
});

export const uploadToB2 = async (file: Buffer, fileName: string, contentType: string) => {
    const key = `${Date.now()}-${fileName}`;
    const command = new PutObjectCommand({
        Bucket: B2_BUCKET_NAME,
        Key: key,
        Body: file,
        ContentType: contentType,
    });

    await s3Client.send(command);

    // Construct the public URL (Note: Make sure your bucket is public or use a CDN/Pre-signed URL)
    // For B2, it's typically: https://f004.backblazeb2.com/file/bucket-name/key
    // Or if using S3 endpoint: https://bucket-name.s3.region.backblazeb2.com/key
    const publicUrl = `https://${B2_BUCKET_NAME}.${B2_ENDPOINT}/${key}`;

    return {
        url: publicUrl,
        fileId: key,
    };
};
