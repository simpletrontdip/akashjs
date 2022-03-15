"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisCertificate = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cert_1 = require("../../../akash/cert/v1beta2/cert");
exports.protobufPackage = "akash.cert.v1beta2";
function createBaseGenesisCertificate() {
    return { owner: "", certificate: undefined };
}
exports.GenesisCertificate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
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
            certificate: isSet(object.certificate)
                ? cert_1.Certificate.fromJSON(object.certificate)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.certificate !== undefined &&
            (obj.certificate = message.certificate
                ? cert_1.Certificate.toJSON(message.certificate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisCertificate();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? cert_1.Certificate.fromPartial(object.certificate)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { certificates: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            exports.GenesisCertificate.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.certificates.push(exports.GenesisCertificate.decode(reader, reader.uint32()));
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
            certificates: Array.isArray(object === null || object === void 0 ? void 0 : object.certificates)
                ? object.certificates.map((e) => exports.GenesisCertificate.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.GenesisCertificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisCertificate.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map