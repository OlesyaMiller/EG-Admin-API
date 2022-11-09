import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}

  async createUser(request: CreateUserDto): Promise <User> {
    try {
      const userEntity = new User();
      userEntity.username = request.username;
      userEntity.password = request.password;

      const newUser = await this.userRepository.save(userEntity);
      return newUser;
    } catch(err) {
      throw err;
    }
  }

  getAllUsers(): Promise <User[]> {
    return this.userRepository.find();
  }

  async getOneUser(username: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneBy({username: username});
      return user;
  
    } catch(err) {
      throw(err);
    }
  }

  async deleteOneById(id: number): Promise<UpdateResult> {
    return this.userRepository.softDelete(id); 
  }
}
