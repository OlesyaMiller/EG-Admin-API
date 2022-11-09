import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExploreDesignerService } from './explore-designer.service';
import { CreateExploreDesignerDto } from './dto/create-explore-designer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('explore-designer')
export class ExploreDesignerController {
  constructor(private readonly exploreDesignerService: ExploreDesignerService) {}

  @Post()
  create(@Body() createExploreDesignerDto: CreateExploreDesignerDto) {
    return this.exploreDesignerService.createExploreDesigner(createExploreDesignerDto);
  }

  @Get()
  findAll() {
    return this.exploreDesignerService.getAllExploreDesigners();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exploreDesignerService.getOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exploreDesignerService.deleteOneById(id);
  }
}
