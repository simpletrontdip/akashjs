"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositDeploymentAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseDepositDeploymentAuthorization() {
    return { spendLimit: undefined };
}
exports.DepositDeploymentAuthorization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.spendLimit !== undefined) {
            coin_1.Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositDeploymentAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit = coin_1.Coin.decode(reader, reader.uint32());
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
            spendLimit: isSet(object.spendLimit)
                ? coin_1.Coin.fromJSON(object.spendLimit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.spendLimit !== undefined &&
            (obj.spendLimit = message.spendLimit
                ? coin_1.Coin.toJSON(message.spendLimit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositDeploymentAuthorization();
        message.spendLimit =
            object.spendLimit !== undefined && object.spendLimit !== null
                ? coin_1.Coin.fromPartial(object.spendLimit)
                : undefined;
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
//# sourceMappingURL=authz.js.map