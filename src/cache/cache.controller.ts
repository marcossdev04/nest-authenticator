import { Controller, Get, Post } from '@nestjs/common';
import { CacheService } from './cache.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cache')
@Controller('cache')
export class CacheController {
    constructor(private readonly cacheService: CacheService) { }

    @Get()
    async find() {

        return 'true'
    }

    @Post()
    async store() {

        return 'true'
    }
}