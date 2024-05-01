import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from './auth/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { MooviesModule } from './movies/moovies.module';
import { CacheModule } from '@nestjs/cache-manager';
import { MooviesEntity } from './movies/entity/moovies.entity';
@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    forwardRef(() => MooviesModule),
    UserModule,
    AuthModule,
    CacheModule.register({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dcs-postgres',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [UserEntity, MooviesEntity],
    }),
    MooviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }