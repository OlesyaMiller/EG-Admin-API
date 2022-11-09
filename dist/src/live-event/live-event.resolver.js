"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveEventResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_live_event_dto_1 = require("./dto/create-live-event.dto");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const live_event_service_1 = require("./live-event.service");
let LiveEventResolver = class LiveEventResolver extends (0, query_graphql_1.CRUDResolver)(create_live_event_dto_1.CreateLiveEventDto) {
    constructor(service) {
        super(service);
        this.service = service;
    }
    restoreOneLiveEvent(id) {
        return this.service.restoreOne(id);
    }
    restoreManyLiveEvents(filter) {
        return this.service.restoreMany(filter);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => create_live_event_dto_1.CreateLiveEventDto),
    __param(0, (0, graphql_1.Args)('input', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LiveEventResolver.prototype, "restoreOneLiveEvent", null);
__decorate([
    (0, graphql_1.Mutation)(() => (0, query_graphql_1.UpdateManyResponseType)()),
    __param(0, (0, graphql_1.Args)('input', { type: () => (0, query_graphql_1.FilterType)(create_live_event_dto_1.CreateLiveEventDto) })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LiveEventResolver.prototype, "restoreManyLiveEvents", null);
LiveEventResolver = __decorate([
    (0, graphql_1.Resolver)(() => create_live_event_dto_1.CreateLiveEventDto),
    __metadata("design:paramtypes", [live_event_service_1.LiveEventService])
], LiveEventResolver);
exports.LiveEventResolver = LiveEventResolver;
//# sourceMappingURL=live-event.resolver.js.map