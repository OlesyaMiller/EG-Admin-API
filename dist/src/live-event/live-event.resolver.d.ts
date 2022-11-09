import { CreateLiveEventDto } from "./dto/create-live-event.dto";
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { LiveEventService } from './live-event.service';
import { UpdateManyResponse, Filter } from '@nestjs-query/core';
declare const LiveEventResolver_base: import("@nestjs-query/query-graphql/dist/src/resolvers/resolver.interface").ResolverClass<CreateLiveEventDto, import("@nestjs-query/core").QueryService<CreateLiveEventDto, import("@nestjs-query/core").DeepPartial<CreateLiveEventDto>, import("@nestjs-query/core").DeepPartial<CreateLiveEventDto>>, CRUDResolver<CreateLiveEventDto, import("@nestjs-query/core").DeepPartial<CreateLiveEventDto>, import("@nestjs-query/core").DeepPartial<CreateLiveEventDto>, import("@nestjs-query/query-graphql").ReadResolverOpts<CreateLiveEventDto>, import("@nestjs-query/core").QueryService<CreateLiveEventDto, import("@nestjs-query/core").DeepPartial<CreateLiveEventDto>, import("@nestjs-query/core").DeepPartial<CreateLiveEventDto>>>>;
export declare class LiveEventResolver extends LiveEventResolver_base {
    readonly service: LiveEventService;
    constructor(service: LiveEventService);
    restoreOneLiveEvent(id: number): Promise<CreateLiveEventDto>;
    restoreManyLiveEvents(filter: Filter<CreateLiveEventDto>): Promise<UpdateManyResponse>;
}
export {};
