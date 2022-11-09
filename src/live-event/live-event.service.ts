import { Injectable } from "@nestjs/common";
import { LiveEvent } from "src/live-event/entities/live-event.entity";
import { MoreThan, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLiveEventDto } from "./dto/create-live-event.dto";
import { UpdateLiveEventDto } from "./dto/update-live-event.dto";
import {UpdateResult} from 'typeorm/query-builder/result/UpdateResult';

@Injectable()
export class LiveEventService {
    constructor(@InjectRepository(LiveEvent) private liveEventsRepository: Repository<LiveEvent>
    ){}

    async getAllLiveEvents(): Promise <LiveEvent[]> {
        return this.liveEventsRepository.find();
    }

    async getOneById(liveEventId: number): Promise <LiveEvent> {
        try {
            const liveEvent = await this.liveEventsRepository.findOneBy({id: liveEventId}); 
            return liveEvent;
        } catch(err) {
            throw err;
        }
    }
    
    async createLiveEvent(request: CreateLiveEventDto): Promise <LiveEvent> {
        try {
            const liveEventEntity = new LiveEvent();
            liveEventEntity.title = request.title;
            liveEventEntity.code = request.code;
            liveEventEntity.url = request.url;
            liveEventEntity.notes = request.notes;
            liveEventEntity.dateEnds = request.dateEnds;
            liveEventEntity.dateStarts = request.dateStarts;

            const newLiveEvent = await this.liveEventsRepository.save(liveEventEntity);
            return newLiveEvent;
        } catch(err) {
            throw err;
        }
    }

    async updateLiveEvent(liveEventId: number, data: UpdateLiveEventDto): Promise <LiveEvent> {
        // const liveEvent = await this.liveEventsRepository.findOneBy({id: liveEventId})
        console.log('THIS IS THE NEW DTO:', JSON.stringify(data))

        
        // if (!liveEvent) {
        //     throw new NotFoundException('Event not found');
        // } 

        const updatedLiveEvent = await this.liveEventsRepository.update(liveEventId, data);

        console.log('THIS IS THE UPDATED EVENT:', JSON.stringify(updatedLiveEvent))
        // const savedLiveEvent = await this.liveEventsRepository.save(updatedLiveEvent);
        return;
        // return updatedLiveEvent;
        
    }

    async deleteLiveEventById(id: number): Promise<UpdateResult> {
        return await this.liveEventsRepository.softDelete(id);
    }

    async loadNotEndedEvents(): Promise<any> {
        const eventsData = await this.liveEventsRepository.find({where: {dateEnds: MoreThan(new Date())}});
        return eventsData;
    }
}


