import { LiveEventService } from './live-event.service';
import { CreateLiveEventDto } from './dto/create-live-event.dto';
import { UpdateLiveEventDto } from './dto/update-live-event.dto';
export declare class LiveEventController {
    private liveEventService;
    constructor(liveEventService: LiveEventService);
    getAllLiveEvents(): Promise<import("./entities/live-event.entity").LiveEvent[]>;
    getOneById(id: number): Promise<import("./entities/live-event.entity").LiveEvent>;
    create(createLiveEventDto: CreateLiveEventDto): Promise<import("./entities/live-event.entity").LiveEvent>;
    update(id: number, updateLiveEventDto: UpdateLiveEventDto): Promise<import("./entities/live-event.entity").LiveEvent>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
