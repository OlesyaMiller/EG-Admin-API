import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateNavRecommendedDesignerDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    sellerId: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    name: string;

}
