const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const params = {
  Bucket: 's3-node',
  Key: 'image/' + 'imageTest',
  Body: fs.readFileSync('testImg.png'),
  ContentType: 'image/png',
};

s3.upload(params, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(`File uploaded successfully. ${data}`);
});
