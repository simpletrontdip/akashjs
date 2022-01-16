"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxCertCreateClient = void 0;
const akash_1 = require("../akash/akash");
const certificate_1 = require("../utils/certificate");
class TxCertCreateClient {
    constructor(akash) {
        this.akash = akash;
    }
    async params(params = {}) {
        const owner = this.akash.address;
        const { memo = "", fee = akash_1.defaultFee, naf = 365, nbf = new Date() } = params;
        const pemBlocks = await (0, certificate_1.createPEMBlocks)(owner, naf, nbf);
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
    }
}
exports.TxCertCreateClient = TxCertCreateClient;
//# sourceMappingURL=txCertCreateClient.js.map