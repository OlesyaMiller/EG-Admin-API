import { ExploreDesignerService } from './explore-designer.service';
import { CreateExploreDesignerDto } from './dto/create-explore-designer.dto';
export declare class ExploreDesignerController {
    private readonly exploreDesignerService;
    constructor(exploreDesignerService: ExploreDesignerService);
    create(createExploreDesignerDto: CreateExploreDesignerDto): Promise<import("./entities/explore-designer.entity").ExploreDesigner>;
    findAll(): Promise<import("./entities/explore-designer.entity").ExploreDesigner[]>;
    findOne(id: string): Promise<import("./entities/explore-designer.entity").ExploreDesigner>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
