import { Injectable } from '@nestjs/common';
import { CreateNavRecommendedDesignerDto } from './dto/create-nav-recommended-designer.dto';
import { NavRecommendedDesigner } from './entities/nav-recommended-designer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class NavRecommendedDesignerService {
  constructor(@InjectRepository(NavRecommendedDesigner) private navRecommendedDesignerRepository: Repository<NavRecommendedDesigner>){}
  
  async createNavRecommendedDesigner(request: CreateNavRecommendedDesignerDto): Promise <NavRecommendedDesigner> {
    try {
      const navRecommendedDesignerEntity = new NavRecommendedDesigner();
      navRecommendedDesignerEntity.sellerId = request.sellerId;
      navRecommendedDesignerEntity.name = request.name;

      const newNavRecommendedDesigner = await this.navRecommendedDesignerRepository.save(navRecommendedDesignerEntity);
      return newNavRecommendedDesigner;
    } catch(err) {
        throw err;
    }
  }
  
  getAllNavRecommendedDesigners(): Promise <NavRecommendedDesigner[]> {
    return this.navRecommendedDesignerRepository.find();
  }

  async getOneById(navRecommendedDesignerId: string): Promise <NavRecommendedDesigner> {
    try {
        const navRecommendedDesigner = await this.navRecommendedDesignerRepository.findOneBy({sellerId: navRecommendedDesignerId}); 
        return navRecommendedDesigner;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: string): Promise<UpdateResult> {
    return this.navRecommendedDesignerRepository.softDelete(id); 
  }  
}
