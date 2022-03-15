"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSpec = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attribute_1 = require("../../../akash/base/v1beta2/attribute");
const resource_1 = require("../../../akash/deployment/v1beta2/resource");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseGroupSpec() {
    return { name: "", requirements: undefined, resources: [] };
}
exports.GroupSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            attribute_1.PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.resources) {
            resource_1.Resource.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requirements = attribute_1.PlacementRequirements.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources.push(resource_1.Resource.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? String(object.name) : "",
            requirements: isSet(object.requirements)
                ? attribute_1.PlacementRequirements.fromJSON(object.requirements)
                : undefined,
            resources: Array.isArray(object === null || object === void 0 ? void 0 : object.resources)
                ? object.resources.map((e) => resource_1.Resource.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? attribute_1.PlacementRequirements.toJSON(message.requirements)
                : undefined);
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.Resource.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGroupSpec();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? attribute_1.PlacementRequirements.fromPartial(object.requirements)
                : undefined;
        message.resources =
            ((_b = object.resources) === null || _b === void 0 ? void 0 : _b.map((e) => resource_1.Resource.fromPartial(e))) || [];
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
