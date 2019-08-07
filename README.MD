# Learning Serverless

This repo is meant to highlight how to create and deploy serverless functions in this case λ aws-lambda functions using node & typescript.

## Getting Started
1. https://www.npmjs.com/package/serverless
2. https://serverless.com/framework/docs/providers/aws/guide/intro/

## Helpful commands Using Serverless CLI

### Install AWS CLI & Setup
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
