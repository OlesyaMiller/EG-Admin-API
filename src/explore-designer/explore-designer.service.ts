import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExploreDesignerDto } from './dto/create-explore-designer.dto';
import { ExploreDesigner } from './entities/explore-designer.entity';
import {UpdateResult} from 'typeorm/query-builder/result/UpdateResult';
import {Image} from '../image/entities/image.entity';

@Injectable()
export class ExploreDesignerService {
  constructor(@InjectRepository(ExploreDesigner) private exploreDesignerRepository: Repository<ExploreDesigner>){}

  async createExploreDesigner(request: CreateExploreDesignerDto): Promise <ExploreDesigner> {
    try {
      const exploreDesignerEntity = new ExploreDesigner();
      exploreDesignerEntity.sellerId = request.sellerId;
      exploreDesignerEntity.image = new Image() ;
      exploreDesignerEntity.image.id = request.imageId;

      const newExploreDesigner = await this.exploreDesignerRepository.save(exploreDesignerEntity);
      return newExploreDesigner;
    } catch(err) {
        throw err;
    }
  }

  getAllExploreDesigners(): Promise <ExploreDesigner[]> {
    return this.exploreDesignerRepository.find();
  }

  async getOneById(exploreDesignerId: string): Promise <ExploreDesigner> {
    try {
        const exploreDesigner = await this.exploreDesignerRepository.findOneBy({sellerId: exploreDesignerId}); 
        return exploreDesigner;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(sellerId: string): Promise<UpdateResult> {
    return this.exploreDesignerRepository.softDelete(sellerId); // returns removed instance
  }
}
