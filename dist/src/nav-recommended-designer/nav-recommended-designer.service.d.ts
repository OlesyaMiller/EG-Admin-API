import { CreateNavRecommendedDesignerDto } from './dto/create-nav-recommended-designer.dto';
import { NavRecommendedDesigner } from './entities/nav-recommended-designer.entity';
import { Repository, UpdateResult } from 'typeorm';
export declare class NavRecommendedDesignerService {
    private navRecommendedDesignerRepository;
    constructor(navRecommendedDesignerRepository: Repository<NavRecommendedDesigner>);
    createNavRecommendedDesigner(request: CreateNavRecommendedDesignerDto): Promise<NavRecommendedDesigner>;
    getAllNavRecommendedDesigners(): Promise<NavRecommendedDesigner[]>;
    getOneById(navRecommendedDesignerId: string): Promise<NavRecommendedDesigner>;
    deleteOneById(id: string): Promise<UpdateResult>;
}
