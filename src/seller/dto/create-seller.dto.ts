import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateSellerDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    sellerId: string;

    @IsString()
    @IsNotEmpty()
    videoFooter: string;
    
}
