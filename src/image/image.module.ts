import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { diskStorage } from 'multer';
import {randomUUID} from 'crypto';
import {extname} from 'path';

@Module({
  imports: [TypeOrmModule.forFeature([Image]),    
  MulterModule.registerAsync({
    imports: [ConfigModule],
    inject: [ ConfigService ],
    useFactory: async (configService: ConfigService) => {
      return {
        storage: diskStorage({
          destination: async (req, file, cb) => {
            const path: string = configService.get('IMAGE_UPLOAD_DIR');
            return cb(null, path);
          },
          filename: (req, file, cb) => {
            return cb(null, `${randomUUID()}${extname(file.originalname)}`);
          }
        })
      }
    }
  })
  ],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
