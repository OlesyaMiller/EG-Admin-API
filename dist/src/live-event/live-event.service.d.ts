import { LiveEvent } from "src/live-event/entities/live-event.entity";
import { Repository } from "typeorm";
import { CreateLiveEventDto } from "./dto/create-live-event.dto";
import { UpdateLiveEventDto } from "./dto/update-live-event.dto";
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
export declare class LiveEventService {
    private liveEventsRepository;
    constructor(liveEventsRepository: Repository<LiveEvent>);
    getAllLiveEvents(): Promise<LiveEvent[]>;
    getOneById(liveEventId: number): Promise<LiveEvent>;
    createLiveEvent(request: CreateLiveEventDto): Promise<LiveEvent>;
    updateLiveEvent(liveEventId: number, data: UpdateLiveEventDto): Promise<LiveEvent>;
    deleteLiveEventById(id: number): Promise<UpdateResult>;
    loadNotEndedEvents(): Promise<any>;
}
