const AWS = require("aws-sdk");

AWS.config.update({
    "region": "ap-south-1"
});

const dC = new AWS.DynamoDB.DocumentClient();

const modify = function () {

    const params = {
        TableName: "Info",
        Key: { "ID": 22 },
        UpdateExpression: "set Age = :a",
        ExpressionAttributeValues: {
            ":a": 53
        },
        ReturnValues: "UPDATED_NEW"

    };
    dC.update(params, function (err, data) {

        if (err) {
            console.log("error" + JSON.stringify(err));
        } else {
            console.log("success"+JSON.stringify(data));
        }
    });
}

modify();