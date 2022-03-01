const AWS = require("aws-sdk");

AWS.config.update({
    "region": "ap-south-1"
});

const dC = new AWS.DynamoDB.DocumentClient();

const write = function() {

    const input = {
        "ID": 22,
        "Name": "pandu",
        "Age": 17
    };
    const params = {
        TableName: "Info",
        Item:  input
    };
    dC.put(params, function (err, data) {

        if (err) {
            console.log("error" + JSON.stringify(err, null, 2));                      
        } else {
            console.log("success" );                      
        }
    });
}

write();