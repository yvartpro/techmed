import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(data: CreateUserDto) {
    return this.userModel.create(data as any); // DTO ensures correct type
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  update(id: number, data: Partial<CreateUserDto>) {
    return this.userModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
