import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty({
        description: 'Nome do filme',
        example: 'Tinaic'
    })
    name: string;


    @ApiProperty({
        description: 'Descrição do filme',
        example: 'Resenha do filme'
    })
    description: string;


    @ApiProperty({
        description: 'popularidade',
        example: '8/10'
    })
    popularity: string;


    @ApiProperty({
        description: 'Data de lançamento',
        example: '2 de outubro de 2004'
    })
    releseDate: string;


    @ApiProperty({
        description: 'Gênero do filme',
        example: 'Romance'
    })
    gender: string;


    @ApiProperty({
        description: 'linguagem do filme',
        example: 'Inglês'
    })
    lang: string;
}