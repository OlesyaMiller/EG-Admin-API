import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NavTopDesignerService } from './nav-top-designer.service';
import { CreateNavTopDesignerDto } from './dto/create-nav-top-designer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('nav-top-designer')
export class NavTopDesignerController {
  constructor(private readonly navTopDesignerService: NavTopDesignerService) {}

  @Post()
  create(@Body() createNavTopDesignerDto: CreateNavTopDesignerDto) {
    return this.navTopDesignerService.createNavTopDesigner(createNavTopDesignerDto);
  }

  @Get()
  findAll() {
    return this.navTopDesignerService.getAllNavTopDesigners();
  }

  @Get(':id')
  findOne(@Param('id') sellerId: string) {
    return this.navTopDesignerService.getOneById(sellerId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navTopDesignerService.deleteOneById(id);
  }
}
