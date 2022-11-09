import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateNavTopDesignerDto } from './dto/create-nav-top-designer.dto';
import { NavTopDesigner } from './entities/nav-top-designer.entity';
import {Image} from '../image/entities/image.entity';

@Injectable()
export class NavTopDesignerService {
  constructor(@InjectRepository(NavTopDesigner) private navTopDesignerRepository: Repository<NavTopDesigner>){}
  
  async createNavTopDesigner(request: CreateNavTopDesignerDto): Promise <NavTopDesigner> {
    try {
      const navTopDesignerEntity = new NavTopDesigner();
      navTopDesignerEntity.sellerId = request.sellerId;
      navTopDesignerEntity.image = new Image() ;
      navTopDesignerEntity.image.id = request.imageId ;

      const newNavTopDesigner = await this.navTopDesignerRepository.save(navTopDesignerEntity);
      return newNavTopDesigner;
    } catch(err) {
        throw err;
    }
  }

  async getAllNavTopDesigners(): Promise <NavTopDesigner[]> {
    return await this.navTopDesignerRepository.find();
  }

  async getOneById(navTopDesignerId: string): Promise <NavTopDesigner> {
    try {
        const navTopDesigner = await this.navTopDesignerRepository.findOneBy({sellerId: navTopDesignerId}); 
        return navTopDesigner;
    } catch(err) {
        throw err;
    }
  }

  async deleteOneById(id: string): Promise<UpdateResult> {
    return this.navTopDesignerRepository.softDelete(id); 
  }
}
