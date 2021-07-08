const AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.downloadFile = async(event) => {
    console.log(event)

    let fileName = event["queryStringParameters"]["filename"];
    console.log("filename", fileName)

    let fileData = await getData(fileName);

    let base64Data = fileData.Body.toString('base64');

    const response = {
        statusCode: 200,
        "headers": {
            'Content-Type': fileData.ContentType,
            'Content-Disposition': 'attachment; filename=' + fileName
        },
        body: base64Data,
        isBase64Encoded: true
    };
    return response;
}

function getData(fileName) {
    return new Promise((res, rej) => {
        let params = {
            Bucket: process.env.bucketName,
            Key: fileName,
        }
        let fileObj = s3.getObject(params, (err, data) => {
            if (err) {
                console.log(err)
                rej(err)
            } else {
                console.log(data)
                res(data)
            }
        })
    })
}