"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    const contentType = header["content-type"];
    console.log("user-agent", userAgent);
    console.log("content-type", contentType);
    next();
};
exports.logMiddleware = logMiddleware;
