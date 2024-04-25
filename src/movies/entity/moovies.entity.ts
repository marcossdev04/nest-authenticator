import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'moovies'
})
export class MooviesEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    popularity: string

    @Column()
    releseDate: string

    @Column()
    gender: string

    @Column()
    lang: string

}