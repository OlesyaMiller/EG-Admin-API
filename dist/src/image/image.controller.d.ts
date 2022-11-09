import { ImageService } from './image.service';
import { CreateImageRequest } from './dto/create-image-request.dto';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    upload(file: any, createImageRequest: CreateImageRequest): Promise<import("./entities/image.entity").Image>;
    findAll(): Promise<import("./entities/image.entity").Image[]>;
    findOne(id: string): Promise<import("./entities/image.entity").Image>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
