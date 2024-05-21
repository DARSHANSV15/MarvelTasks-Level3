# Serverless with Node.js

## Functions as a Service (FaaS)

The goal is to completely abstract away servers from the developer and only bill based on the number of times the functions have been invoked. Services such as these are easy to scale.

### AWS Lambda
AWS Lambda is a compute service that lets you run code without provisioning or managing servers.

Lambda is an event-based system for running code in the cloud. You don’t worry about servers, only the code you write. It scales automatically and only charges you for the time it actually is running the code, the compute time. Most importantly, it scales automatically! No more worrying about if the EC2 instance you spun up is large enough to serve all your users.

### AWS API Gateway
Lambda would be incomplete without the API Gateway. All lambda functions require an event to be triggered to invoke them. Gateway provides the REST endpoints which trigger the functions.

### The Serverless Framework
Serverless is your toolkit for deploying and operating serverless architectures. Focus on your application, not your infrastructure.

## Steps to Create a Simple HTTP API with Node.js on AWS Lambda and API Gateway Using the Serverless Framework

1. **Install Serverless**
    ```sh
    $ npm install -g serverless
    ```

2. **Create an AWS account and IAM user**

3. **Copy the keys and enter them in the Serverless configuration in the terminal**

4. **Create a template and deploy**

5. **Using the API endpoint provided, access the function**

## Serverless Offline
It sucks that I have to deploy the function to AWS every time I want to test it out. With that awkward digression, voilà, Serverless Offline! Now I can finally test all the code locally before pushing it to AWS.

### Initialize npm in the Service Directory
Now you need to step inside the `my-service` directory and open up a terminal window in there. Once inside you can run:
```sh
$ npm init
```

### Install Serverless Offline
With npm initialized, there's nothing more to do than just run the installation.
```sh
$ npm install serverless-offline --save-dev
```
The `--save-dev` flag will save the package as a development dependency.

Before moving on, you first need to let the terminal know it has a new command available. So within the `serverless.yml` file, add two new lines.

#### `serverless.yml`
```yaml
service: sls-offline

provider:
  name: aws
  runtime: nodejs6.10

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: /sls-offline
          method: get

# adding these two lines
plugins:
  - serverless-offline
```

### Run it Locally
To make sure you’ve installed everything correctly run:
```sh
$ serverless
```
You should see an option named `offline` among the various choices listed. If you do, you’re good to go.

With all that out of the way, go ahead and spin up the local emulation of Lambda and API Gateway.
```sh
$ serverless offline start
```
You’ll see all your routes listed in the terminal. Your Lambdas are now running on your localhost. The default port is 3000. Feel free to open up a browser and check it out. Hitting the endpoint [http://localhost:3000/sls-offline](http://localhost:3000/sls-offline) will send back the same text as in the example above with the deployed function.

## References
- [Serverless Framework Tutorial - YouTube](https://youtu.be/AgOmeANl3ls?feature=shared)
- [Deploying Node.js Apps with Serverless Framework - YouTube](https://youtu.be/VvYADzRwJK8?feature=shared)
- [Building Serverless APIs with AWS Lambda - YouTube](https://youtu.be/90pVRK49AQM?feature=shared)