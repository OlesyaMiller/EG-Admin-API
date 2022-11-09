import { Repository } from 'typeorm';
import { CreateExploreDesignerDto } from './dto/create-explore-designer.dto';
import { ExploreDesigner } from './entities/explore-designer.entity';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
export declare class ExploreDesignerService {
    private exploreDesignerRepository;
    constructor(exploreDesignerRepository: Repository<ExploreDesigner>);
    createExploreDesigner(request: CreateExploreDesignerDto): Promise<ExploreDesigner>;
    getAllExploreDesigners(): Promise<ExploreDesigner[]>;
    getOneById(exploreDesignerId: string): Promise<ExploreDesigner>;
    deleteOneById(sellerId: string): Promise<UpdateResult>;
}
