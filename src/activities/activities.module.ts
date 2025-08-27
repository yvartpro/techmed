import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Activity } from './activity.model';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';

@Module({
  imports: [SequelizeModule.forFeature([Activity])],
  providers: [ActivitiesService],
  controllers: [ActivitiesController],
})
export class ActivitiesModule {}
