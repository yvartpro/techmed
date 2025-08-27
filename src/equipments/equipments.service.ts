import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipment } from './equipment.model';
import { CreateEquipmentDto } from '../dto/create-equipment.dto';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectModel(Equipment)
    private readonly equipmentModel: typeof Equipment,
  ) {}

  create(data: CreateEquipmentDto) {
    return this.equipmentModel.create(data as any); // cast DTO to any to satisfy Sequelize
  }

  findAll() {
    return this.equipmentModel.findAll();
  }

  findOne(id: number) {
    return this.equipmentModel.findByPk(id);
  }

  update(id: number, data: Partial<CreateEquipmentDto>) {
    return this.equipmentModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.equipmentModel.destroy({ where: { id } });
  }
}
