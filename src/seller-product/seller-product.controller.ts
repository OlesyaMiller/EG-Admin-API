import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { SellerProductService } from './seller-product.service';
import { CreateSellerProductDto } from './dto/create-seller-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('seller-product')
export class SellerProductController {
  constructor(private readonly sellerProductService: SellerProductService) {}

  @Post()
  create(@Body() createSellerProductDto: CreateSellerProductDto) {
    return this.sellerProductService.createSellerProduct(createSellerProductDto);
  }

  @Get()
  findAll() {
    return this.sellerProductService.getAllSellerProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sellerProductService.getOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerProductService.deleteOneById(+id);
  }
}
