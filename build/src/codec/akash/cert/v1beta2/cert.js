"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgRevokeCertificateResponse = exports.MsgRevokeCertificate = exports.MsgCreateCertificateResponse = exports.MsgCreateCertificate = exports.CertificateFilter = exports.Certificate = exports.CertificateID = exports.certificate_StateToJSON = exports.certificate_StateFromJSON = exports.Certificate_State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.cert.v1beta2";
/** State is an enum which refers to state of deployment */
var Certificate_State;
(function (Certificate_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Certificate_State[Certificate_State["invalid"] = 0] = "invalid";
    /** valid - CertificateValid denotes state for deployment active */
    Certificate_State[Certificate_State["valid"] = 1] = "valid";
    /** revoked - CertificateRevoked denotes state for deployment closed */
    Certificate_State[Certificate_State["revoked"] = 2] = "revoked";
    Certificate_State[Certificate_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Certificate_State = exports.Certificate_State || (exports.Certificate_State = {}));
function certificate_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Certificate_State.invalid;
        case 1:
        case "valid":
            return Certificate_State.valid;
        case 2:
        case "revoked":
            return Certificate_State.revoked;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Certificate_State.UNRECOGNIZED;
    }
}
exports.certificate_StateFromJSON = certificate_StateFromJSON;
function certificate_StateToJSON(object) {
    switch (object) {
        case Certificate_State.invalid:
            return "invalid";
        case Certificate_State.valid:
            return "valid";
        case Certificate_State.revoked:
            return "revoked";
        default:
            return "UNKNOWN";
    }
}
exports.certificate_StateToJSON = certificate_StateToJSON;
function createBaseCertificateID() {
    return { owner: "", serial: "" };
}
exports.CertificateID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.serial = reader.string();
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
            serial: isSet(object.serial) ? String(object.serial) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.serial !== undefined && (obj.serial = message.serial);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCertificateID();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.serial = (_b = object.serial) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCertificate() {
    return { state: 0, cert: new Uint8Array(), pubkey: new Uint8Array() };
}
exports.Certificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.cert.length !== 0) {
            writer.uint32(26).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(34).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.cert = reader.bytes();
                    break;
                case 4:
                    message.pubkey = reader.bytes();
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
            state: isSet(object.state) ? certificate_StateFromJSON(object.state) : 0,
            cert: isSet(object.cert)
                ? bytesFromBase64(object.cert)
                : new Uint8Array(),
            pubkey: isSet(object.pubkey)
                ? bytesFromBase64(object.pubkey)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined &&
            (obj.state = certificate_StateToJSON(message.state));
        message.cert !== undefined &&
            (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : new Uint8Array()));
        message.pubkey !== undefined &&
            (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCertificate();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.cert = (_b = object.cert) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.pubkey = (_c = object.pubkey) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseCertificateFilter() {
    return { owner: "", serial: "", state: "" };
}
exports.CertificateFilter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.serial = reader.string();
                    break;
                case 3:
                    message.state = reader.string();
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
            serial: isSet(object.serial) ? String(object.serial) : "",
            state: isSet(object.state) ? String(object.state) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.serial !== undefined && (obj.serial = message.serial);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCertificateFilter();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.serial = (_b = object.serial) !== null && _b !== void 0 ? _b : "";
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateCertificate() {
    return { owner: "", cert: new Uint8Array(), pubkey: new Uint8Array() };
}
exports.MsgCreateCertificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.cert.length !== 0) {
            writer.uint32(18).bytes(message.cert);
        }
        if (message.pubkey.length !== 0) {
            writer.uint32(26).bytes(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.cert = reader.bytes();
                    break;
                case 3:
                    message.pubkey = reader.bytes();
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
            cert: isSet(object.cert)
                ? bytesFromBase64(object.cert)
                : new Uint8Array(),
            pubkey: isSet(object.pubkey)
                ? bytesFromBase64(object.pubkey)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.cert !== undefined &&
            (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : new Uint8Array()));
        message.pubkey !== undefined &&
            (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateCertificate();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.cert = (_b = object.cert) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.pubkey = (_c = object.pubkey) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseMsgCreateCertificateResponse() {
    return {};
}
exports.MsgCreateCertificateResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCertificateResponse();
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
        const message = createBaseMsgCreateCertificateResponse();
        return message;
    },
};
function createBaseMsgRevokeCertificate() {
    return { id: undefined };
}
exports.MsgRevokeCertificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.CertificateID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? exports.CertificateID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? exports.CertificateID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeCertificate();
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.CertificateID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseMsgRevokeCertificateResponse() {
    return {};
}
exports.MsgRevokeCertificateResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeCertificateResponse();
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
        const message = createBaseMsgRevokeCertificateResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateCertificate = this.CreateCertificate.bind(this);
        this.RevokeCertificate = this.RevokeCertificate.bind(this);
    }
    CreateCertificate(request) {
        const data = exports.MsgCreateCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Msg", "CreateCertificate", data);
        return promise.then((data) => exports.MsgCreateCertificateResponse.decode(new minimal_1.default.Reader(data)));
    }
    RevokeCertificate(request) {
        const data = exports.MsgRevokeCertificate.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Msg", "RevokeCertificate", data);
        return promise.then((data) => exports.MsgRevokeCertificateResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
