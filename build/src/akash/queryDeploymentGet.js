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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryDeploymentGet = void 0;
const long_1 = __importDefault(require("long"));
class QueryDeploymentGet {
    constructor(queryService) {
        this.queryService = queryService;
    }
    params(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                id: {
                    owner: params.owner,
                    dseq: new long_1.default(params.dseq)
                }
            };
            return this.queryService.Deployment(request);
        });
    }
}
exports.QueryDeploymentGet = QueryDeploymentGet;
