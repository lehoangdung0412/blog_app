import connectDynamodb from "connect-dynamodb";
import session from "express-session";
// import { DYNAMODB_SETTING_INFO } from "../config";

const dynamodbOptions = {
    // Optional DynamoDB table name, defaults to 'sessions'
    table: "session",

    AWSRegion: "ap-southeast-1",

    // Optional ProvisionedThroughput params, defaults to 5
    readCapacityUnits: 5,
    writeCapacityUnits: 5,
    AWSConfigJSON: {
        accessKeyId: "my-access-key",
        secretAccessKey: "my-secret-access-key",
        endpoint: "http://localhost:8000",
        region: "ap-southeast-1",
    },
};
const DynamoDBStore = connectDynamodb(session);
const store = new DynamoDBStore(dynamodbOptions);

export default store;
