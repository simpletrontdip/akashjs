"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgDeleteProviderAttributesResponse = exports.MsgDeleteProviderAttributes = exports.MsgSignProviderAttributesResponse = exports.MsgSignProviderAttributes = exports.AttributesFilters = exports.AttributesResponse = exports.AuditedAttributes = exports.Provider = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attribute_1 = require("../../../akash/base/v1beta2/attribute");
exports.protobufPackage = "akash.audit.v1beta2";
function createBaseProvider() {
    return { owner: "", auditor: "", attributes: [] };
}
exports.Provider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 4:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : "";
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAuditedAttributes() {
    return { owner: "", auditor: "", attributes: [] };
}
exports.AuditedAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuditedAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuditedAttributes();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : "";
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAttributesResponse() {
    return { attributes: [] };
}
exports.AttributesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.attributes) {
            exports.AuditedAttributes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(exports.AuditedAttributes.decode(reader, reader.uint32()));
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
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => exports.AuditedAttributes.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.AuditedAttributes.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAttributesResponse();
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AuditedAttributes.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAttributesFilters() {
    return { auditors: [], owners: [] };
}
exports.AttributesFilters = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auditors) {
            writer.uint32(10).string(v);
        }
        for (const v of message.owners) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditors.push(reader.string());
                    break;
                case 2:
                    message.owners.push(reader.string());
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
            auditors: Array.isArray(object === null || object === void 0 ? void 0 : object.auditors)
                ? object.auditors.map((e) => String(e))
                : [],
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners)
                ? object.owners.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auditors) {
            obj.auditors = message.auditors.map((e) => e);
        }
        else {
            obj.auditors = [];
        }
        if (message.owners) {
            obj.owners = message.owners.map((e) => e);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAttributesFilters();
        message.auditors = ((_a = object.auditors) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.owners = ((_b = object.owners) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgSignProviderAttributes() {
    return { owner: "", auditor: "", attributes: [] };
}
exports.MsgSignProviderAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSignProviderAttributes();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : "";
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgSignProviderAttributesResponse() {
    return {};
}
exports.MsgSignProviderAttributesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributesResponse();
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
        const message = createBaseMsgSignProviderAttributesResponse();
        return message;
    },
};
function createBaseMsgDeleteProviderAttributes() {
    return { owner: "", auditor: "", keys: [] };
}
exports.MsgDeleteProviderAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.keys) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 3:
                    message.keys.push(reader.string());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys)
                ? object.keys.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.auditor !== undefined && (obj.auditor = message.auditor);
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDeleteProviderAttributes();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.auditor = (_b = object.auditor) !== null && _b !== void 0 ? _b : "";
        message.keys = ((_c = object.keys) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgDeleteProviderAttributesResponse() {
    return {};
}
exports.MsgDeleteProviderAttributesResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributesResponse();
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
        const message = createBaseMsgDeleteProviderAttributesResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
        this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
    }
    SignProviderAttributes(request) {
        const data = exports.MsgSignProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Msg", "SignProviderAttributes", data);
        return promise.then((data) => exports.MsgSignProviderAttributesResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteProviderAttributes(request) {
        const data = exports.MsgDeleteProviderAttributes.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Msg", "DeleteProviderAttributes", data);
        return promise.then((data) => exports.MsgDeleteProviderAttributesResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=audit.js.map