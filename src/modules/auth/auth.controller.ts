import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import { userService } from "../user"
import { tokenService } from "../token"
import * as authService from './auth.service';

export const register = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.registerUser(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
    res.status(httpStatus.CREATED).send({ user, tokens });
});

export const login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens = await tokenService.generateAuthTokens(user);
    res.send({ user, tokens });
});