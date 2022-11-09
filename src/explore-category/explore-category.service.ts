import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExploreCategory } from './entities/explore-category.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateExploreCategoryDto } from './dto/create-explore-category.dto';
import {Image} from '../image/entities/image.entity';

@Injectable()
export class ExploreCategoryService {
  constructor(@InjectRepository(ExploreCategory) private exploreCategoryRepository: Repository<ExploreCategory>){
  }

  async createExploreCategory(request: CreateExploreCategoryDto): Promise <ExploreCategory> {
    try {
      const exploreCategoryEntity = new ExploreCategory();
      exploreCategoryEntity.category = request.category;
      exploreCategoryEntity.image = new Image() ;
      exploreCategoryEntity.image.id = request.imageId;

      const newExploreCategory = await this.exploreCategoryRepository.save(exploreCategoryEntity);
      return newExploreCategory;
    } catch(err) {
        throw err;
    }
  }

  getAllExploreCategories(): Promise <ExploreCategory[]> {
    return this.exploreCategoryRepository.find();
  }

  async getOneById(exploreCategoryId: number): Promise <ExploreCategory> {
    try {
        const exploreCategory = await this.exploreCategoryRepository.findOneBy({id: exploreCategoryId}); 
        return exploreCategory;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: number): Promise<UpdateResult> {
    return this.exploreCategoryRepository.softDelete(id); 
  }
}
