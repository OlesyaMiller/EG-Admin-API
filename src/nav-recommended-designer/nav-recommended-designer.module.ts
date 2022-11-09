import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavRecommendedDesignerService } from './nav-recommended-designer.service';
import { NavRecommendedDesignerController } from './nav-recommended-designer.controller';
import { NavRecommendedDesigner } from './entities/nav-recommended-designer.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([NavRecommendedDesigner])],
  controllers: [NavRecommendedDesignerController],
  providers: [NavRecommendedDesignerService, ConfigService],
  exports: [NavRecommendedDesignerService]
})
export class NavRecommendedDesignerModule {}
