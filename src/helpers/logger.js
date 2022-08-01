const winston = require('winston');
const appName = "SampleNodeService"
// add user details, trace id, and other needed formats
const myFormatter = winston.format((info) => {
    const { message } = info;
    info.operationContext = info[Symbol.for('splat')] ? info[Symbol.for('splat')][0] : "undefined"
    info.appName = appName;
    if (info.context) {
        info.message = `${message} ${JSON.stringify(info.data)}`;
        delete info.data; // We added `data` to the message so we can delete it
    }
    return info;
})();

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        myFormatter,
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

module.exports = {
    logger
}