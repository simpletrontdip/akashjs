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
exports.TxDeploymentClose = void 0;
const long_1 = __importDefault(require("long"));
const akash_1 = require("../akash/akash");
class TxDeploymentClose {
    constructor(akash) {
        this.akash = akash;
    }
    params(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.akash.address;
            const { memo = "", fee = akash_1.defaultFee, dseq } = params;
            const request = {
                id: {
                    owner: owner,
                    dseq: new long_1.default(dseq),
                },
            };
            return this.akash.signingClient.deploymentClose(owner, request, fee, memo);
        });
    }
}
exports.TxDeploymentClose = TxDeploymentClose;
