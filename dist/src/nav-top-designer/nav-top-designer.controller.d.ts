import { NavTopDesignerService } from './nav-top-designer.service';
import { CreateNavTopDesignerDto } from './dto/create-nav-top-designer.dto';
export declare class NavTopDesignerController {
    private readonly navTopDesignerService;
    constructor(navTopDesignerService: NavTopDesignerService);
    create(createNavTopDesignerDto: CreateNavTopDesignerDto): Promise<import("./entities/nav-top-designer.entity").NavTopDesigner>;
    findAll(): Promise<import("./entities/nav-top-designer.entity").NavTopDesigner[]>;
    findOne(sellerId: string): Promise<import("./entities/nav-top-designer.entity").NavTopDesigner>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
