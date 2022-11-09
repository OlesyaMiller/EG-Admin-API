import { IsNotEmpty } from "class-validator";

export class CreateImageRequest {

    @IsNotEmpty()
    width:number;

    @IsNotEmpty()
    height: number;
    
}