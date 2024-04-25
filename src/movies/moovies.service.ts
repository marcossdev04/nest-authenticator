import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MooviesEntity } from './entity/moovies.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create.movies.dto';
import { UpdateMooviesDto } from './dto/update.movies.dto';

@Injectable()
export class MooviesService {
    constructor(
        @InjectRepository(MooviesEntity)
        private readonly moviesRepository: Repository<MooviesEntity>
    ) { }

    async isValidId(id: number) {
        const user = await this.moviesRepository.findOne({
            where: {
                id,
            },
        });
        if (!user) {
            throw new HttpException(`O usuário ${id} não existe.`, HttpStatus.BAD_REQUEST);
        }
    }

    async getAll() {
        return await this.moviesRepository.find()
    }

    async getById(id: number) {
        await this.isValidId(id)
        return await this.moviesRepository.findOneBy({
            id
        })
    }

    async create(createMoviesDto: CreateMovieDto) {
        if (
            await this.moviesRepository.exists({
                where: createMoviesDto
            })
        ) {
            throw new HttpException('Este filme já está no catálogo', HttpStatus.BAD_REQUEST)
        }
        const movies = this.moviesRepository.create(createMoviesDto)
        return this.moviesRepository.save(movies)
    }

    async update(id: number, updateMoviesDto: UpdateMooviesDto) {
        await this.isValidId(id)
        if (!updateMoviesDto.description) {
            updateMoviesDto.description = null
        }
        await this.moviesRepository.update(id, updateMoviesDto)
        return this.getById(id)
    }

    async delete(id: number) {
        await this.isValidId(id)
        await this.moviesRepository.delete(id)
        return true
    }

}
