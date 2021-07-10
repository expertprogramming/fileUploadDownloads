# fileUploadDownloads
 Utility to upload and download file to S3 using Lambda and API gateway

This utility is based on aws and nodejs.
Deploy for this utility is based on serverelss framework
You don't have to modify much just clone the report and follow below steps.
This utility has been created for uploading any type of file to s3 bucket using APIGateway and Lambda function.
Also to download file using APIGateway and Lambda Function

 # steps to deploy to cloud

 1. inside env folder under dev.yml add aws accound id
 2. inside env folder under dev.yml modify existing bucket name as per your requirement
 3. configure aws cli
 4. inside project folder go to src folder then run the npm install (it will install serverless framewrok along with othe library)
 5. run the servereless command from project folder
 6. commmand to create IAM Role and policy - serverless deploy -c serverless_iam_role.yml -v -s dev  (current stage is only configure for dev)
 7. run the servereless command from project folder to deploy lambda , apigateway and create s3 bucket
 8. sls deploy -v -s dev

 9. Some time re-deployment of stack unable update the apigateway stage, simply login to aws console then go to apigateway then got to resources section then click on Action (available on top), then select deploy API
 select the existing stage then submit.


# Try with the existing api gateway
# Steps to upload file 
1. Open postman
2. select post method - enter the below mentioned url
    https://rdqk8rswfj.execute-api.us-east-1.amazonaws.com/dev/fileupload
3. under form-data select key as file and give any name
4. under value section browse the file then send

# Steps to download file 
1. open below mentioned url in browser
    https://rdqk8rswfj.execute-api.us-east-1.amazonaws.com/dev/filedownload?filename="filename with extension"
2. pass the file name in <file name>
3. hit enter it will start download

 
  

