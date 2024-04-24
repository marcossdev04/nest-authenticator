import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { registerDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    createToken(user: UserEntity) {
        return {
            acessToken: this.jwtService.sign({
                id: user.id,
                name: user.username,
                email: user.email
            },
                {
                    expiresIn: '2 days',
                }
            )
        }
    }


    async login(email: string, password: string) {
        const user = await this.userRepository.findOneBy({
            email,
            password
        });

        if (!user)
            throw new HttpException(
                'Usuário e/ou senha inválidos',
                HttpStatus.UNAUTHORIZED,
            );

        return {
            acess_token: this.createToken(user),
        }
    }
    async register(data: registerDto) {
        const user = await this.userRepository.create(data);

        return await this.createToken(user);
    }
}