import S3 from 'react-aws-s3';

const config = {
  bucketName: 'isacplusimages',
  region: 'sa-east-1',
  accessKeyId: 'AKIA5TEBS6YJMK7NGJEJ',
  secretAccessKey: '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',
}

const S3Client = new S3(config);
export default S3Client;