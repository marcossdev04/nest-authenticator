import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MooviesEntity } from './entity/moovies.entity';
import { MooviesController } from './movies.controller';
import { MooviesService } from './moovies.service';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth/auth.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),       // fazendo comunicação ao Auth
        forwardRef(() => UserModule),
        TypeOrmModule.forFeature([MooviesEntity])
    ],
    controllers: [MooviesController],
    providers: [MooviesService],
    exports: [MooviesService]
})
export class MooviesModule { }
