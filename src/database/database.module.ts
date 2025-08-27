import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../users/user.model';
import { Equipment } from '../equipments/equipment.model';
import { Activity } from '../activities/activity.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '0000',
        database: 'techmed',
        models: [User, Equipment, Activity],
        autoLoadModels: true,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
