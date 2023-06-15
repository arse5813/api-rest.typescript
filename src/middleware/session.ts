import { NextFunction,Request,Response } from "express";
import { verifyToken } from "../utils/jwt.handles";
import { RequestExt } from "../interfaces/req.ext"; 

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) =>{
    try{

        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop(); // esta funcion rrmueve el ultimo valor de un array
        
        const isUser = verifyToken(`${jwt}`) as { id:string }; 
        if (!isUser){
            res.status(401);
            res.send('NO_TIENE_UN_JWT_VALIDO');
        }else{
            req.user = isUser;
            next(); 
        } 
    }catch(e){
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};

export { checkJwt }