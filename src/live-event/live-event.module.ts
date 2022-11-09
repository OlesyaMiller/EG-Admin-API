import { Module } from '@nestjs/common';
import { LiveEventController } from './live-event.controller';
import { LiveEventService } from './live-event.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveEvent } from './entities/live-event.entity';
import { ConfigService } from '@nestjs/config';
import { CreateLiveEventDto } from './dto/create-live-event.dto';
import { UpdateLiveEventDto } from './dto/update-live-event.dto';

@Module({
    imports: [TypeOrmModule.forFeature([LiveEvent])],
    controllers: [LiveEventController],
    providers: [LiveEventService, ConfigService],
    exports: [LiveEventService]
})

export class LiveEventModule {}
