"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handles_1 = require("../utils/jwt.handles");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop(); // esta funcion rrmueve el ultimo valor de un array
        const isUser = (0, jwt_handles_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send('NO_TIENE_UN_JWT_VALIDO');
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (e) {
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};
exports.checkJwt = checkJwt;
