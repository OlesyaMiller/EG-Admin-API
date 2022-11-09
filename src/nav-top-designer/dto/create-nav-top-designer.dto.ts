import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateNavTopDesignerDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    sellerId: string;

    @IsNotEmpty()
    @IsNumber()
    imageId: number;
    
}
