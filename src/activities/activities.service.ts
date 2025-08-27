import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Activity } from './activity.model';
import { CreateActivityDto } from '../dto/create-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity)
    private readonly activityModel: typeof Activity,
  ) {}

  create(data: CreateActivityDto) {
    return this.activityModel.create(data as any);
  }

  findAll() {
    return this.activityModel.findAll();
  }

  findOne(id: number) {
    return this.activityModel.findByPk(id);
  }

  update(id: number, data: Partial<CreateActivityDto>) {
    return this.activityModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.activityModel.destroy({ where: { id } });
  }
}
