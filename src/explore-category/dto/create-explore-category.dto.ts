import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateExploreCategoryDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    category: string;

    @IsNotEmpty()
    @IsNumber()
    imageId: number;
    
}
