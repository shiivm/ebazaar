import { Request, Response } from "express";
import renderer from "../utils/renderer";
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes';

const renderPage = (req: Request, res: Response) => {
    const reqPath = req.path;
    const JS_VERSION = Date.now();
    const context = {
        JS_VERSION
    };
    matchRoutes(Routes,reqPath).map(({route,match}) => {
    });
    res.setHeader('Content-Type', 'text/html');
    res.send(renderer(reqPath,context))
};

export default renderPage;