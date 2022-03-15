"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.Provider = exports.MsgDeleteProviderResponse = exports.MsgDeleteProvider = exports.MsgUpdateProviderResponse = exports.MsgUpdateProvider = exports.MsgCreateProviderResponse = exports.MsgCreateProvider = exports.ProviderInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const attribute_1 = require("../../../akash/base/v1beta2/attribute");
exports.protobufPackage = "akash.provider.v1beta2";
function createBaseProviderInfo() {
    return { email: "", website: "" };
}
exports.ProviderInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.website !== "") {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.website = reader.string();
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
            email: isSet(object.email) ? String(object.email) : "",
            website: isSet(object.website) ? String(object.website) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.website !== undefined && (obj.website = message.website);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProviderInfo();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.website = (_b = object.website) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgCreateProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: undefined,
        jwtHostUri: "",
    };
}
exports.MsgCreateProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.jwtHostUri !== "") {
            writer.uint32(42).string(message.jwtHostUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.jwtHostUri = reader.string();
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
            hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? exports.ProviderInfo.fromJSON(object.info) : undefined,
            jwtHostUri: isSet(object.jwtHostUri) ? String(object.jwtHostUri) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.hostUri !== undefined && (obj.hostUri = message.hostUri);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.info !== undefined &&
            (obj.info = message.info ? exports.ProviderInfo.toJSON(message.info) : undefined);
        message.jwtHostUri !== undefined && (obj.jwtHostUri = message.jwtHostUri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgCreateProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.hostUri = (_b = object.hostUri) !== null && _b !== void 0 ? _b : "";
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.ProviderInfo.fromPartial(object.info)
                : undefined;
        message.jwtHostUri = (_d = object.jwtHostUri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgCreateProviderResponse() {
    return {};
}
exports.MsgCreateProviderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProviderResponse();
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
        const message = createBaseMsgCreateProviderResponse();
        return message;
    },
};
function createBaseMsgUpdateProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: undefined,
        jwtHostUri: "",
    };
}
exports.MsgUpdateProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.jwtHostUri !== "") {
            writer.uint32(42).string(message.jwtHostUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.jwtHostUri = reader.string();
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
            hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? exports.ProviderInfo.fromJSON(object.info) : undefined,
            jwtHostUri: isSet(object.jwtHostUri) ? String(object.jwtHostUri) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.hostUri !== undefined && (obj.hostUri = message.hostUri);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.info !== undefined &&
            (obj.info = message.info ? exports.ProviderInfo.toJSON(message.info) : undefined);
        message.jwtHostUri !== undefined && (obj.jwtHostUri = message.jwtHostUri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgUpdateProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.hostUri = (_b = object.hostUri) !== null && _b !== void 0 ? _b : "";
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.ProviderInfo.fromPartial(object.info)
                : undefined;
        message.jwtHostUri = (_d = object.jwtHostUri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgUpdateProviderResponse() {
    return {};
}
exports.MsgUpdateProviderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProviderResponse();
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
        const message = createBaseMsgUpdateProviderResponse();
        return message;
    },
};
function createBaseMsgDeleteProvider() {
    return { owner: "" };
}
exports.MsgDeleteProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDeleteProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgDeleteProviderResponse() {
    return {};
}
exports.MsgDeleteProviderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderResponse();
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
        const message = createBaseMsgDeleteProviderResponse();
        return message;
    },
};
function createBaseProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: undefined,
        jwtHostUri: "",
    };
}
exports.Provider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.jwtHostUri !== "") {
            writer.uint32(42).string(message.jwtHostUri);
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
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.jwtHostUri = reader.string();
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
            hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
            info: isSet(object.info) ? exports.ProviderInfo.fromJSON(object.info) : undefined,
            jwtHostUri: isSet(object.jwtHostUri) ? String(object.jwtHostUri) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.hostUri !== undefined && (obj.hostUri = message.hostUri);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? attribute_1.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.info !== undefined &&
            (obj.info = message.info ? exports.ProviderInfo.toJSON(message.info) : undefined);
        message.jwtHostUri !== undefined && (obj.jwtHostUri = message.jwtHostUri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseProvider();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.hostUri = (_b = object.hostUri) !== null && _b !== void 0 ? _b : "";
        message.attributes =
            ((_c = object.attributes) === null || _c === void 0 ? void 0 : _c.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.ProviderInfo.fromPartial(object.info)
                : undefined;
        message.jwtHostUri = (_d = object.jwtHostUri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateProvider = this.CreateProvider.bind(this);
        this.UpdateProvider = this.UpdateProvider.bind(this);
        this.DeleteProvider = this.DeleteProvider.bind(this);
    }
    CreateProvider(request) {
        const data = exports.MsgCreateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Msg", "CreateProvider", data);
        return promise.then((data) => exports.MsgCreateProviderResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateProvider(request) {
        const data = exports.MsgUpdateProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Msg", "UpdateProvider", data);
        return promise.then((data) => exports.MsgUpdateProviderResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeleteProvider(request) {
        const data = exports.MsgDeleteProvider.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Msg", "DeleteProvider", data);
        return promise.then((data) => exports.MsgDeleteProviderResponse.decode(new minimal_1.default.Reader(data)));
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
//# sourceMappingURL=provider.js.map