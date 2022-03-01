const AWS = require("aws-sdk");

AWS.config.update({
    "region": "ap-south-1"
});

const dC = new AWS.DynamoDB.DocumentClient();

const read = function () {
    var params = {
        TableName: "Info",
        Key: {
            "ID": 0
        }
    };
    dC.get(params, function (err, data) {
        if (err) {
            console.log("error" + JSON.stringify(err));
        }
        else {
            console.log("success - " + JSON.stringify(data));
        }
    })
}


read();