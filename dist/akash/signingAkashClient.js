"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigningAkashClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const cert_1 = require("../codec/akash/cert/v1beta2/cert");
const deploymentmsg_1 = require("../codec/akash/deployment/v1beta2/deploymentmsg");
const groupmsg_1 = require("../codec/akash/deployment/v1beta2/groupmsg");
const lease_1 = require("../codec/akash/market/v1beta2/lease");
function akashRegistry() {
    return new proto_signing_1.Registry([
        ...stargate_1.defaultRegistryTypes,
        ["/akash.cert.v1beta2.MsgCreateCertificate", cert_1.MsgCreateCertificate],
        ["/akash.cert.v1beta2.MsgRevokeCertificate", cert_1.MsgRevokeCertificate],
        ["/akash.deployment.v1beta2.MsgCreateDeployment", deploymentmsg_1.MsgCreateDeployment],
        ["/akash.deployment.v1beta2.MsgCloseDeployment", deploymentmsg_1.MsgCloseDeployment],
        ["/akash.deployment.v1beta2.MsgDepositDeployment", deploymentmsg_1.MsgDepositDeployment],
        ["/akash.deployment.v1beta2.MsgUpdateDeployment", deploymentmsg_1.MsgUpdateDeployment],
        ["/akash.deployment.v1beta2.MsgCloseGroup", groupmsg_1.MsgCloseGroup],
        ["/akash.deployment.v1beta2.MsgPauseGroup", groupmsg_1.MsgPauseGroup],
        ["/akash.deployment.v1beta2.MsgPauseGroup", groupmsg_1.MsgStartGroup],
        ["/akash.market.v1beta2.MsgCreateLease", lease_1.MsgCreateLease],
    ]);
}
class SigningAkashClient extends stargate_1.SigningStargateClient {
    static async connectWithSigner(endpoint, signer) {
        const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(endpoint);
        const options = {
            registry: akashRegistry(),
        };
        return new SigningAkashClient(tmClient, signer, options);
    }
    constructor(tmClient, signer, options) {
        super(tmClient, signer, options);
    }
    async certCreateClient(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async certRevoke(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentCreate(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentClose(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentDeposit(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentUpdate(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentGroupClose(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentGroupPause(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async deploymentGroupStart(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
    async marketLeaseCreate(accountAddress, value, fee, memo = "") {
        const message = {
            typeUrl: "/akash.market.v1beta2.MsgCreateLease",
            value: value,
        };
        return this.signAndBroadcast(accountAddress, [message], fee, memo);
    }
}
exports.SigningAkashClient = SigningAkashClient;
//# sourceMappingURL=signingAkashClient.js.map