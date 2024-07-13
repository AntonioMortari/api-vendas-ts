import { AppError } from '@/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorMiddleware = (
    error: Error & AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const message = typeof error.getStatusCode === 'function' ? error.message : 'Erro interno do servidor';
    const statusCode = typeof error.getStatusCode === 'function' ? error.getStatusCode() : StatusCodes.INTERNAL_SERVER_ERROR;

    console.log('ERRO: ', error);

    return res.status(statusCode).json({
        status: statusCode,
        message,
        time: new Date(),
    });

}

export { errorMiddleware };