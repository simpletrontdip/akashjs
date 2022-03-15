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
exports.TxCertCreateClient = void 0;
const akash_1 = require("../akash/akash");
const certificate_1 = require("../utils/certificate");
class TxCertCreateClient {
    constructor(akash) {
        this.akash = akash;
    }
    params(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.akash.address;
            const { memo = "", fee = akash_1.defaultFee, naf = 365, nbf = new Date() } = params;
            const pemBlocks = yield (0, certificate_1.createPEMBlocks)(owner, naf, nbf);
            const encodedPem = (0, certificate_1.encode)(pemBlocks);
            const request = {
                owner: owner,
                cert: (0, certificate_1.stringToUint8Array)(encodedPem.certificate),
                pubkey: (0, certificate_1.stringToUint8Array)(encodedPem.publicKey)
            };
            const response = this.akash.signingClient.certCreateClient(owner, request, fee, memo);
            response.then(() => {
                // save certificate to IndexedDB
                (0, certificate_1.savePEMBlocks)(pemBlocks);
            });
            return response;
        });
    }
}
exports.TxCertCreateClient = TxCertCreateClient;
