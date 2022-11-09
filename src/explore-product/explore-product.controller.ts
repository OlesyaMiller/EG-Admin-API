import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ExploreProductService } from './explore-product.service';
import { CreateExploreProductDto } from './dto/create-explore-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('explore-product')
export class ExploreProductController {
  constructor(private readonly exploreProductService: ExploreProductService) {}

  @Post()
  create(@Body() createExploreProductDto: CreateExploreProductDto) {
    return this.exploreProductService.createExploreProduct(createExploreProductDto);
  }

  @Get()
  findAll() {
    return this.exploreProductService.getAllExploreProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exploreProductService.getOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exploreProductService.deleteOneById(id);
  }
}
