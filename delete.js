const AWS = require("aws-sdk");

AWS.config.update({
    "region": "ap-south-1"
});

const dC = new AWS.DynamoDB.DocumentClient();

const del = function (x) {
    console.log(x)
    const params = {
        TableName: "Info",
        Key: {
            "ID": x
        }
    };
    dC.delete(params, function (err, data) {

        if (err) {
            console.log("error" + JSON.stringify(err));
        } else {
            console.log("deleted");
        }
    });
}

del(process.argv[2]);