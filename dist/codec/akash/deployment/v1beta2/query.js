"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGroupResponse = exports.QueryGroupRequest = exports.QueryDeploymentResponse = exports.QueryDeploymentRequest = exports.QueryDeploymentsResponse = exports.QueryDeploymentsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const deployment_1 = require("../../../akash/deployment/v1beta2/deployment");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("../../../akash/escrow/v1beta2/types");
const groupid_1 = require("../../../akash/deployment/v1beta2/groupid");
const group_1 = require("../../../akash/deployment/v1beta2/group");
exports.protobufPackage = "akash.deployment.v1beta2";
function createBaseQueryDeploymentsRequest() {
    return { filters: undefined, pagination: undefined };
}
exports.QueryDeploymentsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            deployment_1.DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = deployment_1.DeploymentFilters.decode(reader, reader.uint32());
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
            filters: isSet(object.filters)
                ? deployment_1.DeploymentFilters.fromJSON(object.filters)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.filters !== undefined &&
            (obj.filters = message.filters
                ? deployment_1.DeploymentFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentsRequest();
        message.filters =
            object.filters !== undefined && object.filters !== null
                ? deployment_1.DeploymentFilters.fromPartial(object.filters)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDeploymentsResponse() {
    return { deployments: [], pagination: undefined };
}
exports.QueryDeploymentsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deployments) {
            exports.QueryDeploymentResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(exports.QueryDeploymentResponse.decode(reader, reader.uint32()));
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
            deployments: Array.isArray(object === null || object === void 0 ? void 0 : object.deployments)
                ? object.deployments.map((e) => exports.QueryDeploymentResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deployments) {
            obj.deployments = message.deployments.map((e) => e ? exports.QueryDeploymentResponse.toJSON(e) : undefined);
        }
        else {
            obj.deployments = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDeploymentsResponse();
        message.deployments =
            ((_a = object.deployments) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryDeploymentResponse.fromPartial(e))) ||
                [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDeploymentRequest() {
    return { id: undefined };
}
exports.QueryDeploymentRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? deployment_1.DeploymentID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? deployment_1.DeploymentID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? deployment_1.DeploymentID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseQueryDeploymentResponse() {
    return { deployment: undefined, groups: [], escrowAccount: undefined };
}
exports.QueryDeploymentResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.escrowAccount = types_1.Account.decode(reader, reader.uint32());
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
            deployment: isSet(object.deployment)
                ? deployment_1.Deployment.fromJSON(object.deployment)
                : undefined,
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups)
                ? object.groups.map((e) => group_1.Group.fromJSON(e))
                : [],
            escrowAccount: isSet(object.escrowAccount)
                ? types_1.Account.fromJSON(object.escrowAccount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.deployment !== undefined &&
            (obj.deployment = message.deployment
                ? deployment_1.Deployment.toJSON(message.deployment)
                : undefined);
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? group_1.Group.toJSON(e) : undefined));
        }
        else {
            obj.groups = [];
        }
        message.escrowAccount !== undefined &&
            (obj.escrowAccount = message.escrowAccount
                ? types_1.Account.toJSON(message.escrowAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDeploymentResponse();
        message.deployment =
            object.deployment !== undefined && object.deployment !== null
                ? deployment_1.Deployment.fromPartial(object.deployment)
                : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.Group.fromPartial(e))) || [];
        message.escrowAccount =
            object.escrowAccount !== undefined && object.escrowAccount !== null
                ? types_1.Account.fromPartial(object.escrowAccount)
                : undefined;
        return message;
    },
};
function createBaseQueryGroupRequest() {
    return { id: undefined };
}
exports.QueryGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupRequest();
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
        const message = createBaseQueryGroupRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? groupid_1.GroupID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseQueryGroupResponse() {
    return { group: undefined };
}
exports.QueryGroupResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            group_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = group_1.Group.decode(reader, reader.uint32());
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
            group: isSet(object.group) ? group_1.Group.fromJSON(object.group) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.group !== undefined &&
            (obj.group = message.group ? group_1.Group.toJSON(message.group) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupResponse();
        message.group =
            object.group !== undefined && object.group !== null
                ? group_1.Group.fromPartial(object.group)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Deployments = this.Deployments.bind(this);
        this.Deployment = this.Deployment.bind(this);
        this.Group = this.Group.bind(this);
    }
    Deployments(request) {
        const data = exports.QueryDeploymentsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployments", data);
        return promise.then((data) => exports.QueryDeploymentsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Deployment(request) {
        const data = exports.QueryDeploymentRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployment", data);
        return promise.then((data) => exports.QueryDeploymentResponse.decode(new minimal_1.default.Reader(data)));
    }
    Group(request) {
        const data = exports.QueryGroupRequest.encode(request).finish();
        const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Group", data);
        return promise.then((data) => exports.QueryGroupResponse.decode(new minimal_1.default.Reader(data)));
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