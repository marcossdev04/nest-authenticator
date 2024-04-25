import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entity/user.entity';
import { UserModule } from 'src/user/user.module';
import { MooviesModule } from 'src/movies/moovies.module';

@Module({

    imports: [JwtModule.register({
        secret: String(process.env.JWT_SECRET)
    }),

    forwardRef(() => UserModule),
    forwardRef(() => MooviesModule),

    TypeOrmModule.forFeature([UserEntity])
    ],

    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]

})
export class AuthModule { }