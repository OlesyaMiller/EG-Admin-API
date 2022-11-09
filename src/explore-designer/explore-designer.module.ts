import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExploreDesigner } from './entities/explore-designer.entity';
import { ExploreDesignerService } from './explore-designer.service';
import { ExploreDesignerController } from './explore-designer.controller';
import { ConfigService } from '@nestjs/config';
import {ImageModule} from '../image/image.module';
import {Image} from '../image/entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExploreDesigner, Image]), ImageModule],
  controllers: [ExploreDesignerController],
  providers: [ExploreDesignerService, ConfigService],
  exports: [ExploreDesignerService]
})
export class ExploreDesignerModule {}
