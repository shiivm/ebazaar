import { Request, Response } from "express";
import renderer from "../utils/renderer";
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes';

const renderPage = (req: Request, res: Response) => {
    const reqPath = req.path;
    const context = {};
    matchRoutes(Routes,reqPath).map(({route,match}) => {
    });
    console.log("=====================",reqPath);
    res.send(renderer(reqPath,context))
};

export default renderPage;