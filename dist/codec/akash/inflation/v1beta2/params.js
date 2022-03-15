"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "akash.inflation.v1beta2";
function createBaseParams() {
    return { inflationDecayFactor: 0, initialInflation: "", variance: "" };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.inflationDecayFactor !== 0) {
            writer.uint32(8).uint32(message.inflationDecayFactor);
        }
        if (message.initialInflation !== "") {
            writer.uint32(18).string(message.initialInflation);
        }
        if (message.variance !== "") {
            writer.uint32(26).string(message.variance);
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
                    message.inflationDecayFactor = reader.uint32();
                    break;
                case 2:
                    message.initialInflation = reader.string();
                    break;
                case 3:
                    message.variance = reader.string();
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
            inflationDecayFactor: isSet(object.inflationDecayFactor)
                ? Number(object.inflationDecayFactor)
                : 0,
            initialInflation: isSet(object.initialInflation)
                ? String(object.initialInflation)
                : "",
            variance: isSet(object.variance) ? String(object.variance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.inflationDecayFactor !== undefined &&
            (obj.inflationDecayFactor = Math.round(message.inflationDecayFactor));
        message.initialInflation !== undefined &&
            (obj.initialInflation = message.initialInflation);
        message.variance !== undefined && (obj.variance = message.variance);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseParams();
        message.inflationDecayFactor = (_a = object.inflationDecayFactor) !== null && _a !== void 0 ? _a : 0;
        message.initialInflation = (_b = object.initialInflation) !== null && _b !== void 0 ? _b : "";
        message.variance = (_c = object.variance) !== null && _c !== void 0 ? _c : "";
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