"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("../../../akash/escrow/v1beta2/types");
exports.protobufPackage = "akash.escrow.v1beta2";
function createBaseGenesisState() {
    return { accounts: [], payments: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            types_1.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.payments) {
            types_1.FractionalPayment.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.accounts.push(types_1.Account.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.payments.push(types_1.FractionalPayment.decode(reader, reader.uint32()));
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
            payments: Array.isArray(object === null || object === void 0 ? void 0 : object.payments)
                ? object.payments.map((e) => types_1.FractionalPayment.fromJSON(e))
                : [],
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
        if (message.payments) {
            obj.payments = message.payments.map((e) => e ? types_1.FractionalPayment.toJSON(e) : undefined);
        }
        else {
            obj.payments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.accounts =
            ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Account.fromPartial(e))) || [];
        message.payments =
            ((_b = object.payments) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.FractionalPayment.fromPartial(e))) || [];
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
