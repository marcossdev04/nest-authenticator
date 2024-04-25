import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { MooviesService } from './moovies.service';
import { AuthGuard } from 'src/auth/auth/auth.guard';
import { CreateMovieDto } from './dto/create.movies.dto';
import { UpdateMooviesDto } from './dto/update.movies.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MooviesController {
    constructor(private readonly mooviesService: MooviesService) { }

    @UseGuards(AuthGuard)
    @Get()
    @ApiBearerAuth()
    async list() {
        return await this.mooviesService.getAll()
    }

    @UseGuards(AuthGuard)
    @Post()
    @ApiBearerAuth()
    async create(@Body() data: CreateMovieDto) {
        return this.mooviesService.create(data)
    }

    @UseGuards(AuthGuard)
    @Put()
    @ApiBearerAuth()
    async update(@Body() data: UpdateMooviesDto, id: number) {
        return await this.mooviesService.update(id, data)
    }

    @UseGuards(AuthGuard)
    @Delete()
    @ApiBearerAuth()
    async delete(id: number) {
        return await this.mooviesService.delete(id)
    }
}
