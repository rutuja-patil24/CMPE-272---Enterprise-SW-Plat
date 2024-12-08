'use strict';
const sharp = require('sharp');
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

var colors = ["red", "blue", "yellow", "green"];
const maxFontSize = 28;
const minFontSize = 14;

module.exports.create = async (event, context, cb) => {
  try {
    var dogerand = Math.floor(Math.random() * 4 + 1);
    var dogefile = `doge${dogerand}.jpg`;
    const fileNum = Math.floor(Math.random() * 1000);
    const s3filename = `doge-${fileNum}.jpg`;
    
    // Load image using sharp
    const image = sharp(dogefile);
    
    // Save the processed image to a temporary location
    const outputImagePath = `/tmp/doge-${fileNum}.jpg`;
    await image.toFile(outputImagePath);
    
    // Read the processed image from the temporary path
    const imgdata = fs.readFileSync(outputImagePath);
    
    // Upload the processed image to S3
    var s3params = {
      Bucket: 'iopipe-workshop-doge-1',
      Key: s3filename,
      Body: imgdata,
      ContentType: 'image/jpeg',
      ACL: "public-read"
    };
    
    await s3.putObject(s3params).promise();
    
    // Return the S3 URL
    cb(null, {
      text: `<https://s3.amazonaws.com/${s3params.Bucket}/${s3filename}>`,
      unfurl_links: true,
      response_type: "in_channel"
    });
    
  } catch (err) {
    console.error("Error processing image: ", err);
    cb(err, null);
  }
};
