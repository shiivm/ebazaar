import { Request, Response, Errback } from "express";

const errorHandler = (err: Errback,req: Request, res:Response/*  , next: NextFunction */):void => {
    res.status(500).send("<h1>Opps, Page not found222.</h1>");
}
export default errorHandler;