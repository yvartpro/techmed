import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';

@Controller('equipment')
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
