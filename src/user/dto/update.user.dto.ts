import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./Create.user.dto";


export class UpdateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Marcos Vinícius'
    })
    username: string

    @ApiProperty({
        description: 'email do usuário',
        example: 'exemple@gmail.com'
    })
    email: string

    @ApiProperty({
        description: 'senha do usuário',
        example: 'jWTAuth123'
    })
    password: string
}