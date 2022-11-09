import { IsDateString, IsNotEmpty, IsString, MaxLength } from "class-validator";
import {Entity} from 'typeorm';

@Entity()
export class CreateLiveEventDto { 

    id!: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    url: string;

    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsString()
    notes: string;

    @IsNotEmpty()
    @IsDateString()
    dateEnds: Date;

    @IsNotEmpty()
    @IsDateString()
    dateStarts: Date;
    
}
