import App from "./App";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import { RouteConfig } from 'react-router-config';

const Routes:RouteConfig[] =  [
  {
    component: App,
    routes: [
      {
        component: Home,
        pageType: 'home',
        path: "/",
        exact: true,
      },
      {
          component: NotFound,
      }
    ],
  },
];

export default Routes;