import { Response, Request, NextFunction } from "express";

const logMiddleware = (req: Request, res:Response, next: NextFunction) =>{
    const header = req.headers;
    const userAgent = header["user-agent"];
    const contentType = header["content-type"];
    console.log("user-agent", userAgent);
    console.log("content-type",contentType);
    next();
}

export { logMiddleware };