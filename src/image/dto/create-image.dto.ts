import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateImageDto {

    @IsNotEmpty()
    @MaxLength(255)
    filename: string;

    @MaxLength(255)
    @IsNotEmpty()
    filenameOriginal: string;

    @IsNumber()
    size: number;

    mimeType: string;

    encoding: string;

    @IsNotEmpty()
    width: number;

    @IsNotEmpty()
    height: number;
    
}
