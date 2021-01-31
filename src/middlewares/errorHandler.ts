import { Request, Response, NextFunction, Errback } from "express";

const errorHandler = (err: Errback,req: Request, res:Response , next: NextFunction) => {
    res.status(500).send("<h1>Opps, Page not found222.</h1>");
}
export default errorHandler;