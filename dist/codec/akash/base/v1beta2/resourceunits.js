"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnits = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_1 = require("../../../akash/base/v1beta2/resource");
const endpoint_1 = require("../../../akash/base/v1beta2/endpoint");
exports.protobufPackage = "akash.base.v1beta2";
function createBaseResourceUnits() {
    return { cpu: undefined, memory: undefined, storage: [], endpoints: [] };
}
exports.ResourceUnits = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            resource_1.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            resource_1.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.storage) {
            resource_1.Storage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceUnits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpu = resource_1.CPU.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = resource_1.Memory.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.storage.push(resource_1.Storage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
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
            cpu: isSet(object.cpu) ? resource_1.CPU.fromJSON(object.cpu) : undefined,
            memory: isSet(object.memory) ? resource_1.Memory.fromJSON(object.memory) : undefined,
            storage: Array.isArray(object === null || object === void 0 ? void 0 : object.storage)
                ? object.storage.map((e) => resource_1.Storage.fromJSON(e))
                : [],
            endpoints: Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints)
                ? object.endpoints.map((e) => endpoint_1.Endpoint.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.cpu !== undefined &&
            (obj.cpu = message.cpu ? resource_1.CPU.toJSON(message.cpu) : undefined);
        message.memory !== undefined &&
            (obj.memory = message.memory ? resource_1.Memory.toJSON(message.memory) : undefined);
        if (message.storage) {
            obj.storage = message.storage.map((e) => e ? resource_1.Storage.toJSON(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? endpoint_1.Endpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseResourceUnits();
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? resource_1.CPU.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? resource_1.Memory.fromPartial(object.memory)
                : undefined;
        message.storage = ((_a = object.storage) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.Storage.fromPartial(e))) || [];
        message.endpoints =
            ((_b = object.endpoints) === null || _b === void 0 ? void 0 : _b.map((e) => endpoint_1.Endpoint.fromPartial(e))) || [];
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
//# sourceMappingURL=resourceunits.js.map