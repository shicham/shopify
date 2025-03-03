import express, { Router } from 'express';
import productRoute from './product.route';
import userRoute from './user.route';
import authRoute from './auth.route';
import productShopifyRoute from './productShopify.route';
import config from '../../config/config';
import docsRoute from './swagger.route';

const router = express.Router();

interface IRoute {
    path: string;
    route: Router;
}

const defaultIRoute: IRoute[] = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/products',
        route: productRoute,
    },
    {
        path: '/shopify/products',
        route: productShopifyRoute,
    },
    {
        path: '/users',
        route: userRoute,
    },
];

const devIRoute: IRoute[] = [
    // IRoute available only in development mode
    {
        path: '/docs',
        route: docsRoute,
    },

];

defaultIRoute.forEach((route) => {
    router.use(route.path, route.route);
});
console.log("config.env",config.env)
console.log("process.env.NODE_ENVenv",process.env.NODE_ENV)
/* istanbul ignore next */
if (config.env === 'development') {
    devIRoute.forEach((route) => {
        router.use(route.path, route.route);
    });
}

export default router;
