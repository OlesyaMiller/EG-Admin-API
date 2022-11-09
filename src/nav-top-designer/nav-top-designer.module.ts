import { Module } from '@nestjs/common';
import { NavTopDesignerService } from './nav-top-designer.service';
import { NavTopDesignerController } from './nav-top-designer.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { NavTopDesigner } from './entities/nav-top-designer.entity';
import { ConfigService } from '@nestjs/config';
import {Image} from '../image/entities/image.entity';
import {ImageModule} from '../image/image.module';

@Module({
  imports: [TypeOrmModule.forFeature([NavTopDesigner, Image]), ImageModule],
  controllers: [NavTopDesignerController],
  providers: [NavTopDesignerService, ConfigService],
  exports: [NavTopDesignerService]
})
export class NavTopDesignerModule {}
