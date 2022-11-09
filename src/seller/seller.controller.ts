import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { SellerService } from './seller.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post()
  create(@Body() createSellerDto: CreateSellerDto) {
    return this.sellerService.createSeller(createSellerDto);
  }

  @Get()
  findAll() {
    return this.sellerService.getAllSellers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerService.getOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerService.deleteOneById(id);
  }
}
