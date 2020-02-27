const fs = require("fs")

const file = fs.readFileSync("./cv.pdf")

exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: `${file}`
    })
}