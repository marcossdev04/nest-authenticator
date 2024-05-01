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
      host: 'ceu9lmqblp8t3q.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'u8hol6ltgtf1s6',
      password: 'pd1f416fdd8936ea9f912aaa40c7612d07b4155777b89e44383b48d59e07328ef',
      database: 'd1rkp860hf5ah5',
      entities: [UserEntity, MooviesEntity],
    }),
    MooviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }