"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseParams() {
    return { deploymentMinDeposit: undefined };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deploymentMinDeposit !== undefined) {
            coin_1.Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deploymentMinDeposit = coin_1.Coin.decode(reader, reader.uint32());
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
            deploymentMinDeposit: isSet(object.deploymentMinDeposit)
                ? coin_1.Coin.fromJSON(object.deploymentMinDeposit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.deploymentMinDeposit !== undefined &&
            (obj.deploymentMinDeposit = message.deploymentMinDeposit
                ? coin_1.Coin.toJSON(message.deploymentMinDeposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.deploymentMinDeposit =
            object.deploymentMinDeposit !== undefined &&
                object.deploymentMinDeposit !== null
                ? coin_1.Coin.fromPartial(object.deploymentMinDeposit)
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
//# sourceMappingURL=params.js.map