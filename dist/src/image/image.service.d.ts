import { CreateImageDto } from './dto/create-image.dto';
import { Repository, UpdateResult } from 'typeorm';
import { Image } from './entities/image.entity';
export declare class ImageService {
    private imageRepository;
    constructor(imageRepository: Repository<Image>);
    createImage(request: CreateImageDto): Promise<Image>;
    findAll(): Promise<Image[]>;
    getOneImageById(imageId: number): Promise<Image>;
    deleteOneById(id: number): Promise<UpdateResult>;
}
