"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementRequirements = exports.SignedBy = exports.Attribute = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.base.v1beta2";
function createBaseAttribute() {
    return { key: "", value: "" };
}
exports.Attribute = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSignedBy() {
    return { allOf: [], anyOf: [] };
}
exports.SignedBy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.allOf) {
            writer.uint32(10).string(v);
        }
        for (const v of message.anyOf) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedBy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allOf.push(reader.string());
                    break;
                case 2:
                    message.anyOf.push(reader.string());
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
            allOf: Array.isArray(object === null || object === void 0 ? void 0 : object.allOf)
                ? object.allOf.map((e) => String(e))
                : [],
            anyOf: Array.isArray(object === null || object === void 0 ? void 0 : object.anyOf)
                ? object.anyOf.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allOf) {
            obj.allOf = message.allOf.map((e) => e);
        }
        else {
            obj.allOf = [];
        }
        if (message.anyOf) {
            obj.anyOf = message.anyOf.map((e) => e);
        }
        else {
            obj.anyOf = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignedBy();
        message.allOf = ((_a = object.allOf) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.anyOf = ((_b = object.anyOf) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBasePlacementRequirements() {
    return { signedBy: undefined, attributes: [] };
}
exports.PlacementRequirements = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedBy !== undefined) {
            exports.SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlacementRequirements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBy = exports.SignedBy.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
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
            signedBy: isSet(object.signedBy)
                ? exports.SignedBy.fromJSON(object.signedBy)
                : undefined,
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => exports.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedBy !== undefined &&
            (obj.signedBy = message.signedBy
                ? exports.SignedBy.toJSON(message.signedBy)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePlacementRequirements();
        message.signedBy =
            object.signedBy !== undefined && object.signedBy !== null
                ? exports.SignedBy.fromPartial(object.signedBy)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Attribute.fromPartial(e))) || [];
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
