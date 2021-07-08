const { uploadFile } = require('./fileUpload');
const { downloadFile } = require('./fileDownload');

exports.handler = async(event) => {

    console.log(event);

    if (event['resource'] === '/fileupload') {
        let uploadStatus = await uploadFile(event);
        console.log(uploadStatus);
        return uploadStatus;
    } else if (event['resource'] === '/filedownload') {
        let fileData = await downloadFile(event);
        console.log(fileData);
        return fileData;
    }
};