import { Module } from '@nestjs/common';
import { ExploreCategory } from './entities/explore-category.entity';
import { ExploreCategoryService } from './explore-category.service';
import { ExploreCategoryController } from './explore-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import {ImageModule} from '../image/image.module';
import {Image} from '../image/entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExploreCategory, Image]), ImageModule],
  controllers: [ExploreCategoryController],
  providers: [ExploreCategoryService],
  exports: [ExploreCategoryService]
})

export class ExploreCategoryModule {}
