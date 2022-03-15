"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisDeployment = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const deployment_1 = require("../../../akash/deployment/v1beta2/deployment");
const params_1 = require("../../../akash/deployment/v1beta2/params");
const group_1 = require("../../../akash/deployment/v1beta2/group");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseGenesisDeployment() {
    return { deployment: undefined, groups: [] };
}
exports.GenesisDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            deployment: isSet(object.deployment)
                ? deployment_1.Deployment.fromJSON(object.deployment)
                : undefined,
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => group_1.Group.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.deployment !== undefined &&
            (obj.deployment = message.deployment
                ? deployment_1.Deployment.toJSON(message.deployment)
                : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? group_1.Group.toJSON(e) : undefined));
        }
        else {
            obj.groups = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisDeployment();
        message.deployment =
            object.deployment !== undefined && object.deployment !== null
                ? deployment_1.Deployment.fromPartial(object.deployment)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.Group.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return { deployments: [], params: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deployments) {
            exports.GenesisDeployment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(exports.GenesisDeployment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            deployments: Array.isArray(object === null || object === void 0 ? void 0 : object.deployments)
                ? object.deployments.map((e) => exports.GenesisDeployment.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deployments) {
            obj.deployments = message.deployments.map((e) => e ? exports.GenesisDeployment.toJSON(e) : undefined);
        }
        else {
            obj.deployments = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.deployments =
            ((_a = object.deployments) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisDeployment.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
