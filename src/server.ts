import express from "express";
//import xss from 'xss-clean';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import cors from "cors";
import httpStatus from 'http-status';
import config from "./config/config";
import connectDB from "./db";
import routes from './routes/v1';
import { morgan, logger } from './logger';
import { ApiError, errorConverter, errorHandler } from "./errors";

const app = express();

app.use(morgan.successHandler);
app.use(morgan.errorHandler);

app.use(express.json());
app.use(cors());

// sanitize request data
//app.use(xss());
app.use(ExpressMongoSanitize());

connectDB();

app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
const PORT = config.port || 5000;
app.listen(PORT, () => {
    logger.info(`🚀 - Server running on port ${PORT}`)
});