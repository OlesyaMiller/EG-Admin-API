import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateExploreDesignerDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    sellerId: string;

    @IsNotEmpty()
    imageId: number;
}
