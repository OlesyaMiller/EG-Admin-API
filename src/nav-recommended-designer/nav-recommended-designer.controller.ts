import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { NavRecommendedDesignerService } from './nav-recommended-designer.service';
import { CreateNavRecommendedDesignerDto } from './dto/create-nav-recommended-designer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('nav-recommended-designer')
export class NavRecommendedDesignerController {
  constructor(private readonly navRecommendedDesignerService: NavRecommendedDesignerService) {}

  @Post()
  create(@Body() createNavRecommendedDesignerDto: CreateNavRecommendedDesignerDto) {
    return this.navRecommendedDesignerService.createNavRecommendedDesigner(createNavRecommendedDesignerDto);
  }

  @Get()
  findAll() {
    return this.navRecommendedDesignerService.getAllNavRecommendedDesigners();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navRecommendedDesignerService.getOneById(id); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navRecommendedDesignerService.deleteOneById(id);
  }
}
