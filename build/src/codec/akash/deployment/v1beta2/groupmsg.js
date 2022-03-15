"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStartGroupResponse = exports.MsgStartGroup = exports.MsgPauseGroupResponse = exports.MsgPauseGroup = exports.MsgCloseGroupResponse = exports.MsgCloseGroup = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const groupid_1 = require("../../../akash/deployment/v1beta2/groupid");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseMsgCloseGroup() {
    return { id: undefined };
}
exports.MsgCloseGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? groupid_1.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCloseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseMsgCloseGroupResponse() {
    return {};
}
exports.MsgCloseGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroupResponse();
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
        const message = createBaseMsgCloseGroupResponse();
        return message;
    },
};
function createBaseMsgPauseGroup() {
    return { id: undefined };
}
exports.MsgPauseGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? groupid_1.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPauseGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseMsgPauseGroupResponse() {
    return {};
}
exports.MsgPauseGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroupResponse();
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
        const message = createBaseMsgPauseGroupResponse();
        return message;
    },
};
function createBaseMsgStartGroup() {
    return { id: undefined };
}
exports.MsgStartGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? groupid_1.GroupID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? groupid_1.GroupID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgStartGroup();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseMsgStartGroupResponse() {
    return {};
}
exports.MsgStartGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroupResponse();
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
        const message = createBaseMsgStartGroupResponse();
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
