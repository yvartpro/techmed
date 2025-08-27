#!/bin/bash
# Techmed backend setup script (NestJS + Sequelize + MySQL)
# This will recreate src/ folder with modules, models, controllers, and database setup.

# Exit on errors
set -e

# Check if src folder exists
if [ -d "src" ]; then
  echo "Error: 'src/' already exists. Please move or remove it first."
  exit 1
fi

echo "Creating Techmed backend folder structure..."

# Create folders
mkdir -p src/database src/equipments src/activities src/users

# -------------------------------
# database.module.ts
cat > src/database/database.module.ts <<EOL
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
EOL

# -------------------------------
# user.model.ts
cat > src/users/user.model.ts <<EOL
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column
  fullname: string;

  @Column({ allowNull: true })
  phone?: string;
}
EOL

# -------------------------------
# equipment.model.ts
cat > src/equipments/equipment.model.ts <<EOL
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Equipment extends Model<Equipment> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column({ allowNull: true })
  description?: string;

  @Column({ allowNull: true })
  photo?: string;
}
EOL

# -------------------------------
# activity.model.ts
cat > src/activities/activity.model.ts <<EOL
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Activity extends Model<Activity> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  title: string;

  @Column({ allowNull: true })
  description?: string;

  @Column({ defaultValue: new Date() })
  date: Date;
}
EOL

# -------------------------------
# equipments.module.ts
cat > src/equipments/equipments.module.ts <<EOL
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
EOL

# -------------------------------
# equipments.service.ts
cat > src/equipments/equipments.service.ts <<EOL
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipment } from './equipment.model';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectModel(Equipment)
    private equipmentModel: typeof Equipment,
  ) {}

  create(data: { name: string; description?: string; photo?: string }) {
    return this.equipmentModel.create(data);
  }

  findAll() {
    return this.equipmentModel.findAll();
  }

  findOne(id: number) {
    return this.equipmentModel.findByPk(id);
  }

  update(id: number, data: Partial<{ name: string; description: string; photo: string }>) {
    return this.equipmentModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.equipmentModel.destroy({ where: { id } });
  }
}
EOL

# -------------------------------
# equipments.controller.ts
cat > src/equipments/equipments.controller.ts <<EOL
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';

@Controller('equipments')
export class EquipmentsController {
  constructor(private readonly service: EquipmentsService) {}

  @Post()
  create(@Body() data: { name: string; description?: string; photo?: string }) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
EOL

# -------------------------------
# activities.module.ts
cat > src/activities/activities.module.ts <<EOL
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
EOL

# -------------------------------
# activities.service.ts
cat > src/activities/activities.service.ts <<EOL
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Activity } from './activity.model';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity)
    private activityModel: typeof Activity,
  ) {}

  create(data: { title: string; description?: string }) {
    return this.activityModel.create(data);
  }

  findAll() {
    return this.activityModel.findAll();
  }

  findOne(id: number) {
    return this.activityModel.findByPk(id);
  }

  update(id: number, data: Partial<{ title: string; description: string }>) {
    return this.activityModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.activityModel.destroy({ where: { id } });
  }
}
EOL

# -------------------------------
# activities.controller.ts
cat > src/activities/activities.controller.ts <<EOL
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly service: ActivitiesService) {}

  @Post()
  create(@Body() data: { title: string; description?: string }) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
EOL

# -------------------------------
# app.module.ts
cat > src/app.module.ts <<EOL
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [DatabaseModule, EquipmentsModule, ActivitiesModule],
})
export class AppModule {}
EOL

# -------------------------------
# main.ts
cat > src/main.ts <<EOL
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
EOL

echo "✅ Techmed backend structure created successfully in src/."
echo "Run 'yarn start:dev' to start the NestJS server."
