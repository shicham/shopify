import { Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import * as productService from './product.service';
import { IOptions } from "../../paginate/paginate";
import pick from "../../utils/pick";

export const getProduct = catchAsync(async (req: Request, res: Response) => {
    const filter = pick(req.query, ['name', 'role']);
    const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page', 'projectBy']);
    console.log("options",options)
    const result = await productService.queryUsers(filter, options);
    res.send(result);
});