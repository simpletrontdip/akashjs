"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resourceunits_1 = require("../../../akash/base/v1beta2/resourceunits");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseResource() {
    return { resources: undefined, count: 0, price: undefined };
}
exports.Resource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            resourceunits_1.ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = resourceunits_1.ResourceUnits.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
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
            resources: isSet(object.resources)
                ? resourceunits_1.ResourceUnits.fromJSON(object.resources)
                : undefined,
            count: isSet(object.count) ? Number(object.count) : 0,
            price: isSet(object.price) ? coin_1.DecCoin.fromJSON(object.price) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? resourceunits_1.ResourceUnits.toJSON(message.resources)
                : undefined);
        message.count !== undefined && (obj.count = Math.round(message.count));
        message.price !== undefined &&
            (obj.price = message.price ? coin_1.DecCoin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResource();
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? resourceunits_1.ResourceUnits.fromPartial(object.resources)
                : undefined;
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? coin_1.DecCoin.fromPartial(object.price)
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
