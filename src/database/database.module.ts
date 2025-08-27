import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Equipment } from '../equipments/equipment.model';
import { Activity } from '../activities/activity.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'yvart',
      password: '1234',
      database: 'techmed',
      models: [User, Equipment, Activity],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
  ],
})
export class DatabaseModule {}
