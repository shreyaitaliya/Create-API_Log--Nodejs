var AWS = require("aws-sdk");
AWS.config.update({ region: 'ca-central-1' });//aws-region
var sqs = new AWS.SQS({ apiVersion: '2012-11-05' });//aws-version

const techlog = async (data) => {
    try {
        const params = {
            DelaySeconds: 0,
            MessageBody: JSON.stringify(data),
            MessageDeduplicationId: "TheWhistler",
            MessageGroupId: "Group1",
            QueueUrl: 'https://sqs.ca-central-1.amazonaws.com/992382519158/dev-tech-log-dlq.fifo',
        };
        console.log(params);

        console.log("-----------------------------");
        sqs.sendMessage(params, function (err, data) {
            if (err) {
                return err;
            }
            else {
                console.log(data);
                return data;
            }
        });
    } catch (error) {
        return error.message
    }
}

module.exports = {
    techlog
}