import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { jwtGuard } from './auth.guard';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }

    @Post('login')
    login(@Body() { email, password }: loginDto) {
        return { token: this.AuthService.login(email, password) };
    }

    @Post('register')
    async register(@Body() body: registerDto) {
        return await this.AuthService.register(body)
    }


}
