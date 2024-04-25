import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() data: CreateUserDto) {
        return await this.userService.create(data)
    }

    @Get()
    async findUsers() {
        return await this.userService.findAll()
    }

    @Get(':id')
    async ReadConcern(id: number) {
        return await this.userService.findOne(id)
    }

    @Put(":id")
    async patch(@Body() data: UpdateUserDto, id: number) {
        return await this.userService.update(id, data);
    }

    @Delete(":id")
    async delete(id: number) {
        return await this.userService.delete(id)
    }
}