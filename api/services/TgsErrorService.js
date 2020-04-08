module.exports = class TgsError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.isTgsError = true;
    }
}