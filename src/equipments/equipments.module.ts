import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Equipment } from './equipment.model';
import { EquipmentsService } from './equipments.service';
import { EquipmentsController } from './equipments.controller';

@Module({
  imports: [SequelizeModule.forFeature([Equipment])],
  providers: [EquipmentsService],
  controllers: [EquipmentsController],
})
export class EquipmentsModule {}
