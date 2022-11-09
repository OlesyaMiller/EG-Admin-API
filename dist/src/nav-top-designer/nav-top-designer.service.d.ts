import { Repository, UpdateResult } from 'typeorm';
import { CreateNavTopDesignerDto } from './dto/create-nav-top-designer.dto';
import { NavTopDesigner } from './entities/nav-top-designer.entity';
export declare class NavTopDesignerService {
    private navTopDesignerRepository;
    constructor(navTopDesignerRepository: Repository<NavTopDesigner>);
    createNavTopDesigner(request: CreateNavTopDesignerDto): Promise<NavTopDesigner>;
    getAllNavTopDesigners(): Promise<NavTopDesigner[]>;
    getOneById(navTopDesignerId: string): Promise<NavTopDesigner>;
    deleteOneById(id: string): Promise<UpdateResult>;
}
