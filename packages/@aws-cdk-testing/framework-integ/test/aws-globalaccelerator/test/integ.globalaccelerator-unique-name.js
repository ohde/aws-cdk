"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
// eslint-disable-next-line import/no-extraneous-dependencies
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const ga = require("aws-cdk-lib/aws-globalaccelerator");
const app = new aws_cdk_lib_1.App({});
const stack = new aws_cdk_lib_1.Stack(app, 'global-accelerator-unique-name');
new ga.Accelerator(stack, 'Accelerator');
new integ_tests_alpha_1.IntegTest(app, 'GlobalAcceleratorUniqueName', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuZ2xvYmFsYWNjZWxlcmF0b3ItdW5pcXVlLW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5nbG9iYWxhY2NlbGVyYXRvci11bmlxdWUtbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF5QztBQUN6Qyw2REFBNkQ7QUFDN0Qsa0VBQXVEO0FBQ3ZELHdEQUF3RDtBQUV4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBSyxDQUFDLEdBQUcsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0FBRS9ELElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFekMsSUFBSSw2QkFBUyxDQUFDLEdBQUcsRUFBRSw2QkFBNkIsRUFBRTtJQUNoRCxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDbkIsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwLCBTdGFjayB9IGZyb20gJ2F3cy1jZGstbGliJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IEludGVnVGVzdCB9IGZyb20gJ0Bhd3MtY2RrL2ludGVnLXRlc3RzLWFscGhhJztcbmltcG9ydCAqIGFzIGdhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1nbG9iYWxhY2NlbGVyYXRvcic7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe30pO1xuXG5jb25zdCBzdGFjayA9IG5ldyBTdGFjayhhcHAsICdnbG9iYWwtYWNjZWxlcmF0b3ItdW5pcXVlLW5hbWUnKTtcblxubmV3IGdhLkFjY2VsZXJhdG9yKHN0YWNrLCAnQWNjZWxlcmF0b3InKTtcblxubmV3IEludGVnVGVzdChhcHAsICdHbG9iYWxBY2NlbGVyYXRvclVuaXF1ZU5hbWUnLCB7XG4gIHRlc3RDYXNlczogW3N0YWNrXSxcbn0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==