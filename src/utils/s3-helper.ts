import ReactS3Client from 'react-aws-s3-typescript';

const s3Config = {
    dirName: 'Teams', /** Default please override */
    bucketName: process.env.NEXT_PUBLIC_S3_BUCKET_NAME || '',
    region: process.env.NEXT_PUBLIC_S3_REGION || '',
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY || ''
}

export const s3UploadFile = (dirName: string = 'Club', filename: string = 'image', file: File) => {
    return new Promise(async (resolve, reject) => {
        const s3 = new ReactS3Client({ ...s3Config, dirName });
        try {
            const res = await s3.uploadFile(file, filename);
            resolve(res)
        } catch (exception) {
            console.log(exception);
            reject(null)
        }
    });
};

