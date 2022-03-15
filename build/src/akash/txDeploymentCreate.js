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
exports.TxDeploymentCreate = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
const deployment_1 = require("../utils/deployment");
class TxDeploymentCreate {
    constructor(akash) {
        this.akash = akash;
    }
    params(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.akash.address;
            const { memo = "", fee = akash_1.defaultFee, deposit = {
                denom: akash_1.denom,
                amount: "5000000",
            }, dseq = yield (0, deployment_1.currentBlockHeight)(this.akash), depositor, sdl, } = params;
            const request = {
                id: {
                    owner: owner,
                    dseq: new long_1.default(dseq),
                },
                groups: sdl.groups,
                version: new Uint8Array(yield sdl.manifestVersion()),
                deposit: deposit,
                depositor: depositor,
            };
            return this.akash.signingClient.deploymentCreate(owner, request, fee, memo);
        });
    }
}
exports.TxDeploymentCreate = TxDeploymentCreate;
