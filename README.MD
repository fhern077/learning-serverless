# Learning Serverless w/AWS Lambdas λ

This repo is meant to highlight how to create and deploy serverless functions in this case λ aws-lambda functions using node & typescript.

## Getting Started
1. https://www.npmjs.com/package/serverless
2. https://serverless.com/framework/docs/providers/aws/guide/intro/

## Helpful commands Using Serverless CLI

### Install AWS CLI & Setup
Sign Up for free Tier: https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc

https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html

### Serverless Post-Requisites
- Create Serverless Lambda
```bash
yarn global add serverless
serverless create --template help #this wil list out  available serverless templates
serverless create --template aws-nodejs-typescript --path learning-serverless-lambda
```
- Post Serverless creation
```bash
cd learning-serverless-lambda
yarn add -D serverless-webpack
```
- Health Check Serverless
```bash
serverless  invoke local -f hello
```

### Create Serverless Function (From Scratch Kinda )
```bash
mkdir serverless-scratch && cd mkdir serverless-scratch/src
cd serverless-scratch/src && touch event.json && touch helloworld.ts
```

## Notes

**Sync Vs Async Lambdas**

* You will have to use Synchronous execution if you want to get a return response directly from the lambda this makes
sense in an http req-res context.

* Not so much if you're lambda is just updating a dynamoDB table or uploading to s3
in those scenarios you most likely want to execute async and just get a callback when the event is done.

**Serverless**
Break out projects by service name

provider specifies information about the deployment context
  ```
    provider:
    name: aws
    runtime: nodejs8.10
    profile: personal
    region: us-east-1
    stage: dev
  ```




