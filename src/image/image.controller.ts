import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common'; 
import { CreateImageRequest } from './dto/create-image-request.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file, @Body() createImageRequest: CreateImageRequest) {

    const dto: CreateImageDto = new CreateImageDto();
    dto.filename = file.filename;
    dto.size = file.size;
    dto.filenameOriginal = file.originalname;
    dto.mimeType = file.mimetype;
    dto.encoding = file.encoding;
    dto.width = createImageRequest.width;
    dto.height = createImageRequest.height;
    return this.imageService.createImage(dto);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.getOneImageById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.deleteOneById(+id);
  }
}
