"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.endpoint_KindToJSON = exports.endpoint_KindFromJSON = exports.Endpoint_Kind = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.base.v1beta2";
/** This describes how the endpoint is implemented when the lease is deployed */
var Endpoint_Kind;
(function (Endpoint_Kind) {
    /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
    Endpoint_Kind[Endpoint_Kind["SHARED_HTTP"] = 0] = "SHARED_HTTP";
    /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
    Endpoint_Kind[Endpoint_Kind["RANDOM_PORT"] = 1] = "RANDOM_PORT";
    /** LEASED_IP - Describes an endpoint that becomes a leased IP */
    Endpoint_Kind[Endpoint_Kind["LEASED_IP"] = 2] = "LEASED_IP";
    Endpoint_Kind[Endpoint_Kind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Endpoint_Kind = exports.Endpoint_Kind || (exports.Endpoint_Kind = {}));
function endpoint_KindFromJSON(object) {
    switch (object) {
        case 0:
        case "SHARED_HTTP":
            return Endpoint_Kind.SHARED_HTTP;
        case 1:
        case "RANDOM_PORT":
            return Endpoint_Kind.RANDOM_PORT;
        case 2:
        case "LEASED_IP":
            return Endpoint_Kind.LEASED_IP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Endpoint_Kind.UNRECOGNIZED;
    }
}
exports.endpoint_KindFromJSON = endpoint_KindFromJSON;
function endpoint_KindToJSON(object) {
    switch (object) {
        case Endpoint_Kind.SHARED_HTTP:
            return "SHARED_HTTP";
        case Endpoint_Kind.RANDOM_PORT:
            return "RANDOM_PORT";
        case Endpoint_Kind.LEASED_IP:
            return "LEASED_IP";
        default:
            return "UNKNOWN";
    }
}
exports.endpoint_KindToJSON = endpoint_KindToJSON;
function createBaseEndpoint() {
    return { kind: 0, sequenceNumber: 0 };
}
exports.Endpoint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        if (message.sequenceNumber !== 0) {
            writer.uint32(16).uint32(message.sequenceNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndpoint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                case 2:
                    message.sequenceNumber = reader.uint32();
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
            kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : 0,
            sequenceNumber: isSet(object.sequenceNumber)
                ? Number(object.sequenceNumber)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined &&
            (obj.kind = endpoint_KindToJSON(message.kind));
        message.sequenceNumber !== undefined &&
            (obj.sequenceNumber = Math.round(message.sequenceNumber));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEndpoint();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : 0;
        message.sequenceNumber = (_b = object.sequenceNumber) !== null && _b !== void 0 ? _b : 0;
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
//# sourceMappingURL=endpoint.js.map