"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCloseDeploymentResponse = exports.MsgCloseDeployment = exports.MsgUpdateDeploymentResponse = exports.MsgUpdateDeployment = exports.MsgDepositDeploymentResponse = exports.MsgDepositDeployment = exports.MsgCreateDeploymentResponse = exports.MsgCreateDeployment = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const deployment_1 = require("../../../akash/deployment/v1beta2/deployment");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const groupspec_1 = require("../../../akash/deployment/v1beta2/groupspec");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseMsgCreateDeployment() {
    return {
        id: undefined,
        groups: [],
        version: new Uint8Array(),
        deposit: undefined,
        depositor: "",
    };
}
exports.MsgCreateDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            groupspec_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(42).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(groupspec_1.GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                case 4:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.depositor = reader.string();
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => groupspec_1.GroupSpec.fromJSON(e))
                : [],
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(),
            deposit: isSet(object.deposit)
                ? coin_1.Coin.fromJSON(object.deposit)
                : undefined,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? deployment_1.DeploymentID.toJSON(message.id) : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? groupspec_1.GroupSpec.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.version !== undefined &&
            (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? coin_1.Coin.toJSON(message.deposit)
                : undefined);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => groupspec_1.GroupSpec.fromPartial(e))) || [];
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? coin_1.Coin.fromPartial(object.deposit)
                : undefined;
        message.depositor = (_c = object.depositor) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateDeploymentResponse() {
    return {};
}
exports.MsgCreateDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateDeploymentResponse();
        return message;
    },
};
function createBaseMsgDepositDeployment() {
    return { id: undefined, amount: undefined, depositor: "" };
}
exports.MsgDepositDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositor = reader.string();
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? deployment_1.DeploymentID.toJSON(message.id) : undefined);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDepositDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgDepositDeploymentResponse() {
    return {};
}
exports.MsgDepositDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDepositDeploymentResponse();
        return message;
    },
};
function createBaseMsgUpdateDeployment() {
    return { id: undefined, groups: [], version: new Uint8Array() };
}
exports.MsgUpdateDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            groupspec_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(groupspec_1.GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => groupspec_1.GroupSpec.fromJSON(e))
                : [],
            version: isSet(object.version)
                ? bytesFromBase64(object.version)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? deployment_1.DeploymentID.toJSON(message.id) : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? groupspec_1.GroupSpec.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.version !== undefined &&
            (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => groupspec_1.GroupSpec.fromPartial(e))) || [];
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgUpdateDeploymentResponse() {
    return {};
}
exports.MsgUpdateDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateDeploymentResponse();
        return message;
    },
};
function createBaseMsgCloseDeployment() {
    return { id: undefined };
}
exports.MsgCloseDeployment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? deployment_1.DeploymentID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCloseDeployment();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseMsgCloseDeploymentResponse() {
    return {};
}
exports.MsgCloseDeploymentResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCloseDeploymentResponse();
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=deploymentmsg.js.map