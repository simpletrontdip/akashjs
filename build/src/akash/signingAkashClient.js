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
exports.SigningAkashClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const cert_1 = require("../codec/akash/cert/v1beta2/cert");
function akashRegistry() {
    return new proto_signing_1.Registry([
        ...stargate_1.defaultRegistryTypes,
        ["/akash.cert.v1beta2.MsgCreateCertificate", cert_1.MsgCreateCertificate],
        // ["/akash.cert.v1beta2.MsgRevokeCertificate", MsgRevokeCertificate],
        // ["/akash.deployment.v1beta2.MsgCreateDeployment", MsgCreateDeployment],
        // ["/akash.deployment.v1beta2.MsgCloseDeployment", MsgCloseDeployment],
        // ["/akash.deployment.v1beta2.MsgDepositDeployment", MsgDepositDeployment],
        // ["/akash.deployment.v1beta2.MsgUpdateDeployment", MsgUpdateDeployment],
        // ["/akash.deployment.v1beta2.MsgCloseGroup", MsgCloseGroup],
        // ["/akash.deployment.v1beta2.MsgPauseGroup", MsgPauseGroup],
        // ["/akash.deployment.v1beta2.MsgPauseGroup", MsgStartGroup],
        // ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease],
    ]);
}
class SigningAkashClient extends stargate_1.SigningStargateClient {
    static connectWithSigner(endpoint, signer) {
        return __awaiter(this, void 0, void 0, function* () {
            const tmClient = yield tendermint_rpc_1.Tendermint34Client.connect(endpoint);
            const options = {
                registry: akashRegistry(),
            };
            return new SigningAkashClient(tmClient, signer, options);
        });
    }
    constructor(tmClient, signer, options) {
        super(tmClient, signer, options);
    }
    certCreateClient(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    certRevoke(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentCreate(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentClose(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentDeposit(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentUpdate(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentGroupClose(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentGroupPause(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    deploymentGroupStart(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
    marketLeaseCreate(accountAddress, value, fee, memo = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                typeUrl: "/akash.market.v1beta2.MsgCreateLease",
                value: value,
            };
            return this.signAndBroadcast(accountAddress, [message], fee, memo);
        });
    }
}
exports.SigningAkashClient = SigningAkashClient;
