import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('activity')
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
