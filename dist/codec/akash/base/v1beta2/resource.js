"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.Memory = exports.CPU = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resourcevalue_1 = require("../../../akash/base/v1beta2/resourcevalue");
const attribute_1 = require("../../../akash/base/v1beta2/attribute");
exports.protobufPackage = "akash.base.v1beta2";
function createBaseCPU() {
    return { units: undefined, attributes: [] };
}
exports.CPU = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.units !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.units = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            units: isSet(object.units)
                ? resourcevalue_1.ResourceValue.fromJSON(object.units)
                : undefined,
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.units !== undefined &&
            (obj.units = message.units
                ? resourcevalue_1.ResourceValue.toJSON(message.units)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCPU();
        message.units =
            object.units !== undefined && object.units !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.units)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMemory() {
    return { quantity: undefined, attributes: [] };
}
exports.Memory = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            quantity: isSet(object.quantity)
                ? resourcevalue_1.ResourceValue.fromJSON(object.quantity)
                : undefined,
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.quantity !== undefined &&
            (obj.quantity = message.quantity
                ? resourcevalue_1.ResourceValue.toJSON(message.quantity)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMemory();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.quantity)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStorage() {
    return { name: "", quantity: undefined, attributes: [] };
}
exports.Storage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            quantity: isSet(object.quantity)
                ? resourcevalue_1.ResourceValue.fromJSON(object.quantity)
                : undefined,
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.quantity !== undefined &&
            (obj.quantity = message.quantity
                ? resourcevalue_1.ResourceValue.toJSON(message.quantity)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStorage();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.quantity)
                : undefined;
        message.attributes =
            ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
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
//# sourceMappingURL=resource.js.map