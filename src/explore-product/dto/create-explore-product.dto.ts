import {IsNotEmpty, Length} from "class-validator";

export class CreateExploreProductDto {

    @Length(1, 255)
    @IsNotEmpty()
    productId: string;

    @Length(1, 255)
    @IsNotEmpty()
    name: string;
}
