import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class UserIdcheck implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {

        if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
            throw new HttpException('id inválido', HttpStatus.BAD_REQUEST)

        }
    }
}