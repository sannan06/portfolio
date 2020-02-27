const fs = require("fs")

const file = fs.readFileSync("./cv.pdf")

exports.handler = function (event, context, callback) {
    let response = {
        statusCode: 200,
        headers: { 'Content-type': 'application/pdf', 'Content-Disposition': 'attachment; filename=Sannan_Hafeez_CV.pdf' },
        body: file.toString('base64'),
        isBase64Encoded: true,
    };

    return callback(null, response);
}