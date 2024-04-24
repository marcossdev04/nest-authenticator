import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserEntity } from './user/entity/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth/auth.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '010203',
      database: 'postgres',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }