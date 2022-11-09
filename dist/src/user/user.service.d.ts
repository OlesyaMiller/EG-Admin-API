import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(request: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getOneUser(username: string): Promise<User>;
    deleteOneById(id: number): Promise<UpdateResult>;
}
