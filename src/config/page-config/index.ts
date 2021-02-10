import {PageConfig} from "../../utils/interfaces";
import homeConfig from "./home";

const Pages: PageConfig[] = [
    homeConfig,
    {
        type: "header",
        cssList: ["client/styles/header.scss"]
    },
    {
        type:"ebazaar",
        cssList:["client/styles/app.scss"]
    }
];

export default Pages;
