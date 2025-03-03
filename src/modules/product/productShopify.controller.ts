import { Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import * as productShopifyService from './productShopify.service';
import { IOptions } from "../../paginate/paginate";
import pick from "../../utils/pick";
import { IProduct } from "shopify-api-node";
import Product from "./product.model";
import map from "../../utils/mapper"

export const getProducts = catchAsync(async (req: Request, res: Response) => {
    const filter = pick(req.query, ['name', 'role']);
    const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
    console.log("options",options)
    const result = await productShopifyService.getProducts(filter, options);
    let dest = new Product<IProduct>
    dest.userId = "123userid234"
    let obj = map(result.results[0],dest);
    dest.save();
    res.send(result);
});