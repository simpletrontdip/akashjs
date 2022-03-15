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
exports.ProviderLeaseStatus = void 0;
const provider_1 = require("../utils/provider");
class ProviderLeaseStatus {
    constructor(akash) {
        this.akash = akash;
    }
    params(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.akash.address;
            const { dseq, gseq, oseq, provider, proxy } = params;
            const r = yield this.akash.query.provider.get.params({ provider: provider });
            const providerUri = (_a = r.provider) === null || _a === void 0 ? void 0 : _a.hostUri;
            if (!providerUri) {
                throw new Error(`Provider ${provider} not found on chain.`);
            }
            const uri = `${proxy}${(0, provider_1.leaseStatusPath)({ dseq: dseq, gseq: gseq, oseq: oseq })}`;
            return (0, provider_1.providerGatewayPost)(uri, providerUri, owner, 'LEASE_STATUS').then(response => response.json());
        });
    }
}
exports.ProviderLeaseStatus = ProviderLeaseStatus;
