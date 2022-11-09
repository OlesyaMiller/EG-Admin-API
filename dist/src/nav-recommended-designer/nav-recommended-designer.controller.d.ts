import { NavRecommendedDesignerService } from './nav-recommended-designer.service';
import { CreateNavRecommendedDesignerDto } from './dto/create-nav-recommended-designer.dto';
export declare class NavRecommendedDesignerController {
    private readonly navRecommendedDesignerService;
    constructor(navRecommendedDesignerService: NavRecommendedDesignerService);
    create(createNavRecommendedDesignerDto: CreateNavRecommendedDesignerDto): Promise<import("./entities/nav-recommended-designer.entity").NavRecommendedDesigner>;
    findAll(): Promise<import("./entities/nav-recommended-designer.entity").NavRecommendedDesigner[]>;
    findOne(id: string): Promise<import("./entities/nav-recommended-designer.entity").NavRecommendedDesigner>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
