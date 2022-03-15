"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryPaymentsResponse = exports.QueryPaymentsRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("../../../akash/escrow/v1beta2/types");
exports.protobufPackage = "akash.escrow.v1beta2";
function createBaseQueryAccountsRequest() {
    return { scope: "", xid: "", owner: "", state: "", pagination: undefined };
}
exports.QueryAccountsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(34).string(message.state);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.state = reader.string();
                    break;
                case 5:
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
            scope: isSet(object.scope) ? String(object.scope) : "",
            xid: isSet(object.xid) ? String(object.xid) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            state: isSet(object.state) ? String(object.state) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined && (obj.scope = message.scope);
        message.xid !== undefined && (obj.xid = message.xid);
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined && (obj.state = message.state);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryAccountsRequest();
        message.scope = (_a = object.scope) !== null && _a !== void 0 ? _a : "";
        message.xid = (_b = object.xid) !== null && _b !== void 0 ? _b : "";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAccountsResponse() {
    return { accounts: [], pagination: undefined };
}
exports.QueryAccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            types_1.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(types_1.Account.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts)
                ? object.accounts.map((e) => types_1.Account.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? types_1.Account.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAccountsResponse();
        message.accounts =
            ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Account.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPaymentsRequest() {
    return {
        scope: "",
        xid: "",
        id: "",
        owner: "",
        state: "",
        pagination: undefined,
    };
}
exports.QueryPaymentsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                case 6:
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
            scope: isSet(object.scope) ? String(object.scope) : "",
            xid: isSet(object.xid) ? String(object.xid) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            state: isSet(object.state) ? String(object.state) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined && (obj.scope = message.scope);
        message.xid !== undefined && (obj.xid = message.xid);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined && (obj.state = message.state);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseQueryPaymentsRequest();
        message.scope = (_a = object.scope) !== null && _a !== void 0 ? _a : "";
        message.xid = (_b = object.xid) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "";
        message.owner = (_d = object.owner) !== null && _d !== void 0 ? _d : "";
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPaymentsResponse() {
    return { payments: [], pagination: undefined };
}
exports.QueryPaymentsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.payments) {
            types_1.FractionalPayment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payments.push(types_1.FractionalPayment.decode(reader, reader.uint32()));
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
            payments: Array.isArray(object === null || object === void 0 ? void 0 : object.payments)
                ? object.payments.map((e) => types_1.FractionalPayment.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.payments) {
            obj.payments = message.payments.map((e) => e ? types_1.FractionalPayment.toJSON(e) : undefined);
        }
        else {
            obj.payments = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPaymentsResponse();
        message.payments =
            ((_a = object.payments) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.FractionalPayment.fromPartial(e))) || [];
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
        this.Accounts = this.Accounts.bind(this);
        this.Payments = this.Payments.bind(this);
    }
    Accounts(request) {
        const data = exports.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Accounts", data);
        return promise.then((data) => exports.QueryAccountsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Payments(request) {
        const data = exports.QueryPaymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Payments", data);
        return promise.then((data) => exports.QueryPaymentsResponse.decode(new minimal_1.default.Reader(data)));
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
//# sourceMappingURL=query.js.map