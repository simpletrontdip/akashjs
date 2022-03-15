"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryLeaseResponse = exports.QueryLeaseRequest = exports.QueryLeasesResponse = exports.QueryLeasesRequest = exports.QueryBidResponse = exports.QueryBidRequest = exports.QueryBidsResponse = exports.QueryBidsRequest = exports.QueryOrderResponse = exports.QueryOrderRequest = exports.QueryOrdersResponse = exports.QueryOrdersRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const order_1 = require("../../../akash/market/v1beta2/order");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const bid_1 = require("../../../akash/market/v1beta2/bid");
const types_1 = require("../../../akash/escrow/v1beta2/types");
const lease_1 = require("../../../akash/market/v1beta2/lease");
exports.protobufPackage = "akash.market.v1beta2";
function createBaseQueryOrdersRequest() {
    return { filters: undefined, pagination: undefined };
}
exports.QueryOrdersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            order_1.OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = order_1.OrderFilters.decode(reader, reader.uint32());
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
                ? order_1.OrderFilters.fromJSON(object.filters)
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
                ? order_1.OrderFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOrdersRequest();
        message.filters =
            object.filters !== undefined && object.filters !== null
                ? order_1.OrderFilters.fromPartial(object.filters)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrdersResponse() {
    return { orders: [], pagination: undefined };
}
exports.QueryOrdersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => order_1.Order.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => (e ? order_1.Order.toJSON(e) : undefined));
        }
        else {
            obj.orders = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => order_1.Order.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderRequest() {
    return { id: undefined };
}
exports.QueryOrderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            order_1.OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = order_1.OrderID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? order_1.OrderID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? order_1.OrderID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? order_1.OrderID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderResponse() {
    return { order: undefined };
}
exports.QueryOrderResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = order_1.Order.decode(reader, reader.uint32());
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
            order: isSet(object.order) ? order_1.Order.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined &&
            (obj.order = message.order ? order_1.Order.toJSON(message.order) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderResponse();
        message.order =
            object.order !== undefined && object.order !== null
                ? order_1.Order.fromPartial(object.order)
                : undefined;
        return message;
    },
};
function createBaseQueryBidsRequest() {
    return { filters: undefined, pagination: undefined };
}
exports.QueryBidsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            bid_1.BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = bid_1.BidFilters.decode(reader, reader.uint32());
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
                ? bid_1.BidFilters.fromJSON(object.filters)
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
                ? bid_1.BidFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBidsRequest();
        message.filters =
            object.filters !== undefined && object.filters !== null
                ? bid_1.BidFilters.fromPartial(object.filters)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBidsResponse() {
    return { bids: [], pagination: undefined };
}
exports.QueryBidsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.bids) {
            exports.QueryBidResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bids.push(exports.QueryBidResponse.decode(reader, reader.uint32()));
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
            bids: Array.isArray(object === null || object === void 0 ? void 0 : object.bids)
                ? object.bids.map((e) => exports.QueryBidResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bids) {
            obj.bids = message.bids.map((e) => e ? exports.QueryBidResponse.toJSON(e) : undefined);
        }
        else {
            obj.bids = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBidsResponse();
        message.bids =
            ((_a = object.bids) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryBidResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBidRequest() {
    return { id: undefined };
}
exports.QueryBidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            bid_1.BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = bid_1.BidID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? bid_1.BidID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? bid_1.BidID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBidRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? bid_1.BidID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseQueryBidResponse() {
    return { bid: undefined, escrowAccount: undefined };
}
exports.QueryBidResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bid !== undefined) {
            bid_1.Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bid = bid_1.Bid.decode(reader, reader.uint32());
                    break;
                case 2:
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
            bid: isSet(object.bid) ? bid_1.Bid.fromJSON(object.bid) : undefined,
            escrowAccount: isSet(object.escrowAccount)
                ? types_1.Account.fromJSON(object.escrowAccount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bid !== undefined &&
            (obj.bid = message.bid ? bid_1.Bid.toJSON(message.bid) : undefined);
        message.escrowAccount !== undefined &&
            (obj.escrowAccount = message.escrowAccount
                ? types_1.Account.toJSON(message.escrowAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBidResponse();
        message.bid =
            object.bid !== undefined && object.bid !== null
                ? bid_1.Bid.fromPartial(object.bid)
                : undefined;
        message.escrowAccount =
            object.escrowAccount !== undefined && object.escrowAccount !== null
                ? types_1.Account.fromPartial(object.escrowAccount)
                : undefined;
        return message;
    },
};
function createBaseQueryLeasesRequest() {
    return { filters: undefined, pagination: undefined };
}
exports.QueryLeasesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filters !== undefined) {
            lease_1.LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeasesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = lease_1.LeaseFilters.decode(reader, reader.uint32());
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
                ? lease_1.LeaseFilters.fromJSON(object.filters)
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
                ? lease_1.LeaseFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLeasesRequest();
        message.filters =
            object.filters !== undefined && object.filters !== null
                ? lease_1.LeaseFilters.fromPartial(object.filters)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLeasesResponse() {
    return { leases: [], pagination: undefined };
}
exports.QueryLeasesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.leases) {
            exports.QueryLeaseResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeasesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leases.push(exports.QueryLeaseResponse.decode(reader, reader.uint32()));
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
            leases: Array.isArray(object === null || object === void 0 ? void 0 : object.leases)
                ? object.leases.map((e) => exports.QueryLeaseResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.leases) {
            obj.leases = message.leases.map((e) => e ? exports.QueryLeaseResponse.toJSON(e) : undefined);
        }
        else {
            obj.leases = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLeasesResponse();
        message.leases =
            ((_a = object.leases) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueryLeaseResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLeaseRequest() {
    return { id: undefined };
}
exports.QueryLeaseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            lease_1.LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = lease_1.LeaseID.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? lease_1.LeaseID.fromJSON(object.id) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id ? lease_1.LeaseID.toJSON(message.id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLeaseRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? lease_1.LeaseID.fromPartial(object.id)
                : undefined;
        return message;
    },
};
function createBaseQueryLeaseResponse() {
    return { lease: undefined, escrowPayment: undefined };
}
exports.QueryLeaseResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lease !== undefined) {
            lease_1.Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
        }
        if (message.escrowPayment !== undefined) {
            types_1.FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLeaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lease = lease_1.Lease.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.escrowPayment = types_1.FractionalPayment.decode(reader, reader.uint32());
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
            lease: isSet(object.lease) ? lease_1.Lease.fromJSON(object.lease) : undefined,
            escrowPayment: isSet(object.escrowPayment)
                ? types_1.FractionalPayment.fromJSON(object.escrowPayment)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lease !== undefined &&
            (obj.lease = message.lease ? lease_1.Lease.toJSON(message.lease) : undefined);
        message.escrowPayment !== undefined &&
            (obj.escrowPayment = message.escrowPayment
                ? types_1.FractionalPayment.toJSON(message.escrowPayment)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLeaseResponse();
        message.lease =
            object.lease !== undefined && object.lease !== null
                ? lease_1.Lease.fromPartial(object.lease)
                : undefined;
        message.escrowPayment =
            object.escrowPayment !== undefined && object.escrowPayment !== null
                ? types_1.FractionalPayment.fromPartial(object.escrowPayment)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Orders = this.Orders.bind(this);
        this.Order = this.Order.bind(this);
        this.Bids = this.Bids.bind(this);
        this.Bid = this.Bid.bind(this);
        this.Leases = this.Leases.bind(this);
        this.Lease = this.Lease.bind(this);
    }
    Orders(request) {
        const data = exports.QueryOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Orders", data);
        return promise.then((data) => exports.QueryOrdersResponse.decode(new minimal_1.default.Reader(data)));
    }
    Order(request) {
        const data = exports.QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Order", data);
        return promise.then((data) => exports.QueryOrderResponse.decode(new minimal_1.default.Reader(data)));
    }
    Bids(request) {
        const data = exports.QueryBidsRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Bids", data);
        return promise.then((data) => exports.QueryBidsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Bid(request) {
        const data = exports.QueryBidRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Bid", data);
        return promise.then((data) => exports.QueryBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    Leases(request) {
        const data = exports.QueryLeasesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Leases", data);
        return promise.then((data) => exports.QueryLeasesResponse.decode(new minimal_1.default.Reader(data)));
    }
    Lease(request) {
        const data = exports.QueryLeaseRequest.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Query", "Lease", data);
        return promise.then((data) => exports.QueryLeaseResponse.decode(new minimal_1.default.Reader(data)));
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