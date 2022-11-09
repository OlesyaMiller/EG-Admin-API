import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ExploreCategoryService } from './explore-category.service';
import { CreateExploreCategoryDto } from './dto/create-explore-category.dto';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('explore-category')
export class ExploreCategoryController {
  constructor(private readonly exploreCategoryService: ExploreCategoryService) {} // what is readonly for?

  @Post()
  create(@Body() createExploreCategoryDto: CreateExploreCategoryDto) {
    return this.exploreCategoryService.createExploreCategory(createExploreCategoryDto);
  }

  @Get()
  findAll() {
    return this.exploreCategoryService.getAllExploreCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.exploreCategoryService.getOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exploreCategoryService.deleteOneById(+id);
  }
}

