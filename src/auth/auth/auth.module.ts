import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from '../jwt-strategy/jwt-strategy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [
        JwtModule.register({
            secret: (process.env.JWT_SECRET),
        }),
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategyService, UserService],
    exports: [AuthService]
})
export class AuthModule { }