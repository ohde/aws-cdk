import { Bucket } from '@aws-cdk/aws-s3';
import { App, CfnOutput, Stack } from '@aws-cdk/core';
import { IntegTest } from '@aws-cdk/integ-tests';
import { BucketDeployment, Source } from '../lib';

const app = new App();
const stack = new Stack(app, 'TestBucketDeploymentContent');
const bucket = new Bucket(stack, 'Bucket');

const file1 = Source.data('file1.txt', 'boom');
const file2 = Source.data('path/to/file2.txt', `bam! ${bucket.bucketName}`);
const file3 = Source.jsonData('my-json/config.json', { website_url: bucket.bucketWebsiteUrl });
const file4 = Source.yamlData('my-yaml/config.yaml', { website_url: bucket.bucketWebsiteUrl });

const deployment = new BucketDeployment(stack, 'DeployMeHere', {
  destinationBucket: bucket,
  sources: [file1, file2],
  destinationKeyPrefix: 'deploy/here/',
  retainOnDelete: false, // default is true, which will block the integration test cleanup
});
deployment.addSource(file3);
deployment.addSource(file4);

new CfnOutput(stack, 'BucketName', { value: bucket.bucketName });

new IntegTest(app, 'integ-test-bucket-deployment-data', {
  testCases: [stack],
});

app.synth();
