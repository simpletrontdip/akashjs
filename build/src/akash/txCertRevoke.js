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
exports.TxCertRevoke = void 0;
const akash_1 = require("../akash/akash");
const certificate_1 = require("../utils/certificate");
class TxCertRevoke {
    constructor(akash) {
        this.akash = akash;
    }
    getSerial(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const cert = yield (0, certificate_1.loadPEMBlocks)(owner);
            if (cert) {
                return cert.serialNumber.toString();
            }
            return "";
        });
    }
    params(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.akash.address;
            const { memo = "", fee = akash_1.defaultFee, serial = yield this.getSerial(owner) } = params;
            const request = {
                id: {
                    owner: owner,
                    serial: serial
                }
            };
            const response = this.akash.signingClient.certRevoke(owner, request, fee, memo);
            response.then(() => {
                // Delete locally stored certificate if exists
                return (0, certificate_1.deletePEMBlocks)(owner, Number(serial));
            });
            return response;
        });
    }
}
exports.TxCertRevoke = TxCertRevoke;
