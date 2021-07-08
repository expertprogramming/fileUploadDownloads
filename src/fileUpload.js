var multipart = require("parse-multipart");

const AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.uploadFile = async(event) => {
    console.log(event);

    var bodyBuffer = Buffer.from(String(event.body), 'base64');
    // console.log(bodyBuffer);
    var boundary = multipart.getBoundary(event.headers['Content-Type']);
    // console.log(boundary);
    var parts = multipart.Parse(bodyBuffer, boundary);
    // console.log(parts)
    let decodedImage = parts[0].data;
    var filePath = parts[0].filename
    var contentType = parts[0].type;

    var params = {
        "Body": decodedImage,
        "Bucket": process.env.bucketName,
        "Key": filePath,
        "ContentType": contentType
    };

    return new Promise((res, rej) => {
        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                rej(err);
            } else {
                let response = {
                    "statusCode": 200,
                    "body": JSON.stringify(data),
                    "isBase64Encoded": false
                };
                res(response);
            }
        })
    })
}