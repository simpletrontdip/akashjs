"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuditList = void 0;
class QueryAuditList {
    constructor(queryService) {
        this.queryService = queryService;
    }
    params(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {};
            // TODO: support pagination, see createPagination()
            // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
            return this.queryService.AllProvidersAttributes(request);
        });
    }
}
exports.QueryAuditList = QueryAuditList;
