"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const deploymentmsg_1 = require("../../../akash/deployment/v1beta2/deploymentmsg");
const groupmsg_1 = require("../../../akash/deployment/v1beta2/groupmsg");
exports.protobufPackage = "akash.deployment.v1beta2";
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateDeployment = this.CreateDeployment.bind(this);
        this.DepositDeployment = this.DepositDeployment.bind(this);
        this.UpdateDeployment = this.UpdateDeployment.bind(this);
        this.CloseDeployment = this.CloseDeployment.bind(this);
        this.CloseGroup = this.CloseGroup.bind(this);
        this.PauseGroup = this.PauseGroup.bind(this);
        this.StartGroup = this.StartGroup.bind(this);
    }
    CreateDeployment(request) {
        const data = deploymentmsg_1.MsgCreateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CreateDeployment", data);
        return promise.then((data) => deploymentmsg_1.MsgCreateDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    DepositDeployment(request) {
        const data = deploymentmsg_1.MsgDepositDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "DepositDeployment", data);
        return promise.then((data) => deploymentmsg_1.MsgDepositDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateDeployment(request) {
        const data = deploymentmsg_1.MsgUpdateDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "UpdateDeployment", data);
        return promise.then((data) => deploymentmsg_1.MsgUpdateDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    CloseDeployment(request) {
        const data = deploymentmsg_1.MsgCloseDeployment.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseDeployment", data);
        return promise.then((data) => deploymentmsg_1.MsgCloseDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    CloseGroup(request) {
        const data = groupmsg_1.MsgCloseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseGroup", data);
        return promise.then((data) => groupmsg_1.MsgCloseGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
    PauseGroup(request) {
        const data = groupmsg_1.MsgPauseGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "PauseGroup", data);
        return promise.then((data) => groupmsg_1.MsgPauseGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
    StartGroup(request) {
        const data = groupmsg_1.MsgStartGroup.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "StartGroup", data);
        return promise.then((data) => groupmsg_1.MsgStartGroupResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
