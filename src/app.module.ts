import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { ActivitiesModule } from './activities/activities.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, DatabaseModule, EquipmentsModule, ActivitiesModule],
})
export class AppModule {}
