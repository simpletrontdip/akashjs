"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCertificatesResponse = exports.QueryCertificatesRequest = exports.CertificateResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cert_1 = require("../../../akash/cert/v1beta2/cert");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "akash.cert.v1beta2";
function createBaseCertificateResponse() {
    return { certificate: undefined, serial: "" };
}
exports.CertificateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificate !== undefined) {
            cert_1.Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
        }
        if (message.serial !== "") {
            writer.uint32(18).string(message.serial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCertificateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificate = cert_1.Certificate.decode(reader, reader.uint32());
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
            certificate: isSet(object.certificate)
                ? cert_1.Certificate.fromJSON(object.certificate)
                : undefined,
            serial: isSet(object.serial) ? String(object.serial) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.certificate !== undefined &&
            (obj.certificate = message.certificate
                ? cert_1.Certificate.toJSON(message.certificate)
                : undefined);
        message.serial !== undefined && (obj.serial = message.serial);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCertificateResponse();
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? cert_1.Certificate.fromPartial(object.certificate)
                : undefined;
        message.serial = (_a = object.serial) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryCertificatesRequest() {
    return { filter: undefined, pagination: undefined };
}
exports.QueryCertificatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filter !== undefined) {
            cert_1.CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter = cert_1.CertificateFilter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            filter: isSet(object.filter)
                ? cert_1.CertificateFilter.fromJSON(object.filter)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? cert_1.CertificateFilter.toJSON(message.filter)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCertificatesRequest();
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? cert_1.CertificateFilter.fromPartial(object.filter)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryCertificatesResponse() {
    return { certificates: [], pagination: undefined };
}
exports.QueryCertificatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            exports.CertificateResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCertificatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(exports.CertificateResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
                ? object.certificates.map((e) => exports.CertificateResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.CertificateResponse.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCertificatesResponse();
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CertificateResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Certificates = this.Certificates.bind(this);
    }
    Certificates(request) {
        const data = exports.QueryCertificatesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
        return promise.then((data) => exports.QueryCertificatesResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
