const fs = require("fs")

const file = fs.readFileSync("./cv.pdf")

exports.handler = function (event, context, callback) {
    let response = {
        statusCode: 200,
        headers: { 'Content-type': 'application/pdf' },
        body: file.toString('base64'),
        isBase64Encoded: true,
    };

    return callback(null, response);
}