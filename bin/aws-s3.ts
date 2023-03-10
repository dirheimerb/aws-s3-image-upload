#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsS3Stack } from '../src/lib/s3';

const app = new cdk.App();
new AwsS3Stack(app, 'AwsS3Stack', {});
