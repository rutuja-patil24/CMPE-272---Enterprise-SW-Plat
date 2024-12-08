# Serverless Framework: Doge Meme Generator

This project demonstrates a serverless application that generates random Doge meme images. The application deploys an AWS Lambda function that creates meme images with randomized text colors and positions and uploads them to an Amazon S3 bucket.

## Features
- Randomized Doge meme image generation
- Text with random colors and positions
- Outputs stored in an S3 bucket
- Configurable AWS IAM policy for secure function execution

## Prerequisites
- Node.js: Install the latest version of [Node.js](https://nodejs.org/).
- Serverless Framework: Install using `npm install -g serverless`.
- AWS CLI: Configure using `aws configure`.
- AWS Account: Required for Lambda and S3 usage.

## Setup Steps
1. Install Node.js and configure your system.
2. Install Serverless Framework with `npm install -g serverless`.
3. Clone this repository to your local machine.
4. Install project dependencies with `npm install`.
5. Rename the project in `serverless.yml` if necessary.
6. Deploy the app using `serverless deploy`.
7. Configure IAM policies for Lambda-S3 interactions.
8. Execute the Lambda function with `serverless invoke -f generateMeme`.

## Outputs
- Generated Doge memes are stored in the configured S3 bucket.
- Logs and execution details are accessible through AWS CloudWatch.

## Fun Edits Made
- Enhanced text customization for Doge memes.
- Added support for different text styles and formats.
- Adjusted color palette for meme text.

## Project Team
- Soumya Bharathi
- Rutuja Patil
- Shubham Kothiya
- Mann Nada

## Resources
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [Lambda Workshop GitHub](https://github.com/iopipe/lambda-workshop)
