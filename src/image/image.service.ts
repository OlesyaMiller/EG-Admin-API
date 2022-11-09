import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(@InjectRepository(Image) private imageRepository: Repository<Image>){}

  async createImage(request: CreateImageDto): Promise <Image> {
    try {
      const imageEntity = new Image();
      imageEntity.filename = request.filename;
      imageEntity.filenameOriginal = request.filenameOriginal; 
      imageEntity.size = request.size;
      imageEntity.mimeType = request.mimeType;
      imageEntity.encoding = request.encoding;
      imageEntity.width = request.width;
      imageEntity.height = request.height;

      const newImage = await this.imageRepository.save(imageEntity);
      return newImage;
    } catch(err) {
        throw err;
    }
  }

  async findAll(): Promise<Image[]> {
      try {
          return await this.imageRepository.find();
      } catch(err) {
          throw err;
      }
  }

  async getOneImageById(imageId: number): Promise <Image> {
    try {
        const image = await this.imageRepository.findOneBy({id: imageId}); 
        return image;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: number): Promise<UpdateResult> {
    return this.imageRepository.softDelete(id); 
  }
}
