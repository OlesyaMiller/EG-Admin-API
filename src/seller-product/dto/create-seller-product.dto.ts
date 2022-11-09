import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateSellerProductDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    sellerId: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    productId: string;
    
}
