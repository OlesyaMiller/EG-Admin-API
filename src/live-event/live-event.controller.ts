import { Get, Post, Delete, Body, Controller, Param, UseGuards, Put } from '@nestjs/common';
import { LiveEventService } from './live-event.service';
import { CreateLiveEventDto } from './dto/create-live-event.dto';
import { UpdateLiveEventDto } from './dto/update-live-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('live-event')
export class LiveEventController {
    constructor(private liveEventService: LiveEventService) {}

    @Get()
    getAllLiveEvents() {
        return this.liveEventService.getAllLiveEvents();
    }

    @Get(':id')
    getOneById(@Param('id') id: number) {
        return this.liveEventService.getOneById(id);
    }

    @Post()
    create(@Body() createLiveEventDto: CreateLiveEventDto) {
        return this.liveEventService.createLiveEvent(createLiveEventDto);
    }

    @Put()
    update(@Param('id') id: number, @Body() updateLiveEventDto: UpdateLiveEventDto) {
        return this.liveEventService.updateLiveEvent(id, updateLiveEventDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.liveEventService.deleteLiveEventById(id);
    }

}
