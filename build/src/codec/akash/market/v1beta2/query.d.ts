import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderFilters, OrderID, Order } from "../../../akash/market/v1beta2/order";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidID, Bid } from "../../../akash/market/v1beta2/bid";
import { Account, FractionalPayment } from "../../../akash/escrow/v1beta2/types";
import { LeaseFilters, LeaseID, Lease } from "../../../akash/market/v1beta2/lease";
export declare const protobufPackage = "akash.market.v1beta2";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
    filters?: OrderFilters;
    pagination?: PageRequest;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination?: PageResponse;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
    id?: OrderID;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
    order?: Order;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
    filters?: BidFilters;
    pagination?: PageRequest;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
    bids: QueryBidResponse[];
    pagination?: PageResponse;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
    id?: BidID;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
    bid?: Bid;
    escrowAccount?: Account;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
    filters?: LeaseFilters;
    pagination?: PageRequest;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
    leases: QueryLeaseResponse[];
    pagination?: PageResponse;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
    id?: LeaseID;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
    lease?: Lease;
    escrowPayment?: FractionalPayment;
}
export declare const QueryOrdersRequest: {
    encode(message: QueryOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrdersRequest;
    fromJSON(object: any): QueryOrdersRequest;
    toJSON(message: QueryOrdersRequest): unknown;
    fromPartial<I extends {
        filters?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            state?: string | undefined;
        } | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        filters?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            state?: string | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["filters"]["dseq"], keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["filters"], keyof OrderFilters>, never>) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryOrdersRequest>, never>>(object: I): QueryOrdersRequest;
};
export declare const QueryOrdersResponse: {
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrdersResponse;
    fromJSON(object: any): QueryOrdersResponse;
    toJSON(message: QueryOrdersResponse): unknown;
    fromPartial<I extends {
        orders?: {
            orderId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: {
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        orders?: ({
            orderId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: {
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        }[] & ({
            orderId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: {
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } & {
            orderId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } & {
                owner?: string | undefined;
                dseq?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["orders"][number]["orderId"]["dseq"], keyof Long.Long>, never>) | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } & Record<Exclude<keyof I["orders"][number]["orderId"], keyof OrderID>, never>) | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: ({
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                name?: string | undefined;
                requirements?: ({
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    signedBy?: ({
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } & {
                        allOf?: (string[] & string[] & Record<Exclude<keyof I["orders"][number]["spec"]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                        anyOf?: (string[] & string[] & Record<Exclude<keyof I["orders"][number]["spec"]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["orders"][number]["spec"]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["orders"][number]["spec"]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["requirements"]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["orders"][number]["spec"]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
                resources?: ({
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] & ({
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                } & {
                    resources?: ({
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } & {
                        cpu?: ({
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } & {
                            units?: ({
                                val?: Uint8Array | undefined;
                            } & {
                                val?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
                        memory?: ({
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } & {
                            quantity?: ({
                                val?: Uint8Array | undefined;
                            } & {
                                val?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
                        storage?: ({
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] & ({
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } & {
                            name?: string | undefined;
                            quantity?: ({
                                val?: Uint8Array | undefined;
                            } & {
                                val?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["storage"], keyof {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[]>, never>) | undefined;
                        endpoints?: ({
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] & ({
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        } & {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"]["endpoints"], keyof {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                    count?: number | undefined;
                    price?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                } & Record<Exclude<keyof I["orders"][number]["spec"]["resources"][number], keyof import("../../deployment/v1beta2/resource").Resource>, never>)[] & Record<Exclude<keyof I["orders"][number]["spec"]["resources"], keyof {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["orders"][number]["spec"], keyof import("../../deployment/v1beta2/groupspec").GroupSpec>, never>) | undefined;
            createdAt?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["orders"][number]["createdAt"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["orders"][number], keyof Order>, never>)[] & Record<Exclude<keyof I["orders"], keyof {
            orderId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: {
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryOrdersResponse>, never>>(object: I): QueryOrdersResponse;
};
export declare const QueryOrderRequest: {
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrderRequest;
    fromJSON(object: any): QueryOrderRequest;
    toJSON(message: QueryOrderRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
        } | undefined;
    } & {
        id?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["id"]["dseq"], keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
        } & Record<Exclude<keyof I["id"], keyof OrderID>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryOrderRequest;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryOrderResponse;
    fromJSON(object: any): QueryOrderResponse;
    toJSON(message: QueryOrderResponse): unknown;
    fromPartial<I extends {
        order?: {
            orderId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: {
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        order?: ({
            orderId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: {
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } & {
            orderId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } & {
                owner?: string | undefined;
                dseq?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["order"]["orderId"]["dseq"], keyof Long.Long>, never>) | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
            } & Record<Exclude<keyof I["order"]["orderId"], keyof OrderID>, never>) | undefined;
            state?: import("../../../akash/market/v1beta2/order").Order_State | undefined;
            spec?: ({
                name?: string | undefined;
                requirements?: {
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                resources?: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                name?: string | undefined;
                requirements?: ({
                    signedBy?: {
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    signedBy?: ({
                        allOf?: string[] | undefined;
                        anyOf?: string[] | undefined;
                    } & {
                        allOf?: (string[] & string[] & Record<Exclude<keyof I["order"]["spec"]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                        anyOf?: (string[] & string[] & Record<Exclude<keyof I["order"]["spec"]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["order"]["spec"]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["order"]["spec"]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["requirements"]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["order"]["spec"]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
                resources?: ({
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] & ({
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                } & {
                    resources?: ({
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } & {
                        cpu?: ({
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } & {
                            units?: ({
                                val?: Uint8Array | undefined;
                            } & {
                                val?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
                        memory?: ({
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } & {
                            quantity?: ({
                                val?: Uint8Array | undefined;
                            } & {
                                val?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
                        storage?: ({
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] & ({
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } & {
                            name?: string | undefined;
                            quantity?: ({
                                val?: Uint8Array | undefined;
                            } & {
                                val?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["storage"], keyof {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[]>, never>) | undefined;
                        endpoints?: ({
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] & ({
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        } & {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"]["endpoints"], keyof {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                    count?: number | undefined;
                    price?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["order"]["spec"]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                } & Record<Exclude<keyof I["order"]["spec"]["resources"][number], keyof import("../../deployment/v1beta2/resource").Resource>, never>)[] & Record<Exclude<keyof I["order"]["spec"]["resources"], keyof {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        memory?: {
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        storage?: {
                            name?: string | undefined;
                            quantity?: {
                                val?: Uint8Array | undefined;
                            } | undefined;
                            attributes?: {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        endpoints?: {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    count?: number | undefined;
                    price?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["order"]["spec"], keyof import("../../deployment/v1beta2/groupspec").GroupSpec>, never>) | undefined;
            createdAt?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["order"]["createdAt"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["order"], keyof Order>, never>) | undefined;
    } & Record<Exclude<keyof I, "order">, never>>(object: I): QueryOrderResponse;
};
export declare const QueryBidsRequest: {
    encode(message: QueryBidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidsRequest;
    fromJSON(object: any): QueryBidsRequest;
    toJSON(message: QueryBidsRequest): unknown;
    fromPartial<I extends {
        filters?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
            state?: string | undefined;
        } | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        filters?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
            state?: string | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["filters"]["dseq"], keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["filters"], keyof BidFilters>, never>) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryBidsRequest>, never>>(object: I): QueryBidsRequest;
};
export declare const QueryBidsResponse: {
    encode(message: QueryBidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidsResponse;
    fromJSON(object: any): QueryBidsResponse;
    toJSON(message: QueryBidsResponse): unknown;
    fromPartial<I extends {
        bids?: {
            bid?: {
                bidId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            escrowAccount?: {
                id?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                transferred?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                settledAt?: string | number | Long.Long | undefined;
                depositor?: string | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        bids?: ({
            bid?: {
                bidId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            escrowAccount?: {
                id?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                transferred?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                settledAt?: string | number | Long.Long | undefined;
                depositor?: string | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            bid?: {
                bidId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            escrowAccount?: {
                id?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                transferred?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                settledAt?: string | number | Long.Long | undefined;
                depositor?: string | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            bid?: ({
                bidId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } & {
                bidId?: ({
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } & {
                    owner?: string | undefined;
                    dseq?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["bids"][number]["bid"]["bidId"]["dseq"], keyof Long.Long>, never>) | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } & Record<Exclude<keyof I["bids"][number]["bid"]["bidId"], keyof BidID>, never>) | undefined;
                state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
                price?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["bids"][number]["bid"]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                createdAt?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["bids"][number]["bid"]["createdAt"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["bids"][number]["bid"], keyof Bid>, never>) | undefined;
            escrowAccount?: ({
                id?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                transferred?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                settledAt?: string | number | Long.Long | undefined;
                depositor?: string | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                id?: ({
                    scope?: string | undefined;
                    xid?: string | undefined;
                } & {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } & Record<Exclude<keyof I["bids"][number]["escrowAccount"]["id"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["bids"][number]["escrowAccount"]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                transferred?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["bids"][number]["escrowAccount"]["transferred"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                settledAt?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["bids"][number]["escrowAccount"]["settledAt"], keyof Long.Long>, never>) | undefined;
                depositor?: string | undefined;
                funds?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["bids"][number]["escrowAccount"]["funds"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            } & Record<Exclude<keyof I["bids"][number]["escrowAccount"], keyof Account>, never>) | undefined;
        } & Record<Exclude<keyof I["bids"][number], keyof QueryBidResponse>, never>)[] & Record<Exclude<keyof I["bids"], keyof {
            bid?: {
                bidId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            escrowAccount?: {
                id?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                transferred?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                settledAt?: string | number | Long.Long | undefined;
                depositor?: string | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryBidsResponse>, never>>(object: I): QueryBidsResponse;
};
export declare const QueryBidRequest: {
    encode(message: QueryBidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidRequest;
    fromJSON(object: any): QueryBidRequest;
    toJSON(message: QueryBidRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
        } | undefined;
    } & {
        id?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["id"]["dseq"], keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
        } & Record<Exclude<keyof I["id"], keyof BidID>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryBidRequest;
};
export declare const QueryBidResponse: {
    encode(message: QueryBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBidResponse;
    fromJSON(object: any): QueryBidResponse;
    toJSON(message: QueryBidResponse): unknown;
    fromPartial<I extends {
        bid?: {
            bidId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } | undefined;
        escrowAccount?: {
            id?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            transferred?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            settledAt?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        bid?: ({
            bidId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } & {
            bidId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } & {
                owner?: string | undefined;
                dseq?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["bid"]["bidId"]["dseq"], keyof Long.Long>, never>) | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } & Record<Exclude<keyof I["bid"]["bidId"], keyof BidID>, never>) | undefined;
            state?: import("../../../akash/market/v1beta2/bid").Bid_State | undefined;
            price?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["bid"]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            createdAt?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["bid"]["createdAt"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["bid"], keyof Bid>, never>) | undefined;
        escrowAccount?: ({
            id?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            transferred?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            settledAt?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            id?: ({
                scope?: string | undefined;
                xid?: string | undefined;
            } & {
                scope?: string | undefined;
                xid?: string | undefined;
            } & Record<Exclude<keyof I["escrowAccount"]["id"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["escrowAccount"]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            transferred?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["escrowAccount"]["transferred"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            settledAt?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["escrowAccount"]["settledAt"], keyof Long.Long>, never>) | undefined;
            depositor?: string | undefined;
            funds?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["escrowAccount"]["funds"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
        } & Record<Exclude<keyof I["escrowAccount"], keyof Account>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryBidResponse>, never>>(object: I): QueryBidResponse;
};
export declare const QueryLeasesRequest: {
    encode(message: QueryLeasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeasesRequest;
    fromJSON(object: any): QueryLeasesRequest;
    toJSON(message: QueryLeasesRequest): unknown;
    fromPartial<I extends {
        filters?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
            state?: string | undefined;
        } | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        filters?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
            state?: string | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["filters"]["dseq"], keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
            state?: string | undefined;
        } & Record<Exclude<keyof I["filters"], keyof LeaseFilters>, never>) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryLeasesRequest>, never>>(object: I): QueryLeasesRequest;
};
export declare const QueryLeasesResponse: {
    encode(message: QueryLeasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeasesResponse;
    fromJSON(object: any): QueryLeasesResponse;
    toJSON(message: QueryLeasesResponse): unknown;
    fromPartial<I extends {
        leases?: {
            lease?: {
                leaseId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
                closedOn?: string | number | Long.Long | undefined;
            } | undefined;
            escrowPayment?: {
                accountId?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                paymentId?: string | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
                rate?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                withdrawn?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        leases?: ({
            lease?: {
                leaseId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
                closedOn?: string | number | Long.Long | undefined;
            } | undefined;
            escrowPayment?: {
                accountId?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                paymentId?: string | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
                rate?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                withdrawn?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            lease?: {
                leaseId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
                closedOn?: string | number | Long.Long | undefined;
            } | undefined;
            escrowPayment?: {
                accountId?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                paymentId?: string | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
                rate?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                withdrawn?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            lease?: ({
                leaseId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
                closedOn?: string | number | Long.Long | undefined;
            } & {
                leaseId?: ({
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } & {
                    owner?: string | undefined;
                    dseq?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & Record<Exclude<keyof I["leases"][number]["lease"]["leaseId"]["dseq"], keyof Long.Long>, never>) | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } & Record<Exclude<keyof I["leases"][number]["lease"]["leaseId"], keyof LeaseID>, never>) | undefined;
                state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
                price?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["leases"][number]["lease"]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                createdAt?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["leases"][number]["lease"]["createdAt"], keyof Long.Long>, never>) | undefined;
                closedOn?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["leases"][number]["lease"]["closedOn"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["leases"][number]["lease"], keyof Lease>, never>) | undefined;
            escrowPayment?: ({
                accountId?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                paymentId?: string | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
                rate?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                withdrawn?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                accountId?: ({
                    scope?: string | undefined;
                    xid?: string | undefined;
                } & {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } & Record<Exclude<keyof I["leases"][number]["escrowPayment"]["accountId"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
                paymentId?: string | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
                rate?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["leases"][number]["escrowPayment"]["rate"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                balance?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["leases"][number]["escrowPayment"]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                withdrawn?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["leases"][number]["escrowPayment"]["withdrawn"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
            } & Record<Exclude<keyof I["leases"][number]["escrowPayment"], keyof FractionalPayment>, never>) | undefined;
        } & Record<Exclude<keyof I["leases"][number], keyof QueryLeaseResponse>, never>)[] & Record<Exclude<keyof I["leases"], keyof {
            lease?: {
                leaseId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                    oseq?: number | undefined;
                    provider?: string | undefined;
                } | undefined;
                state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                createdAt?: string | number | Long.Long | undefined;
                closedOn?: string | number | Long.Long | undefined;
            } | undefined;
            escrowPayment?: {
                accountId?: {
                    scope?: string | undefined;
                    xid?: string | undefined;
                } | undefined;
                paymentId?: string | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
                rate?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                balance?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                withdrawn?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryLeasesResponse>, never>>(object: I): QueryLeasesResponse;
};
export declare const QueryLeaseRequest: {
    encode(message: QueryLeaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeaseRequest;
    fromJSON(object: any): QueryLeaseRequest;
    toJSON(message: QueryLeaseRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
        } | undefined;
    } & {
        id?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["id"]["dseq"], keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
            provider?: string | undefined;
        } & Record<Exclude<keyof I["id"], keyof LeaseID>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryLeaseRequest;
};
export declare const QueryLeaseResponse: {
    encode(message: QueryLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLeaseResponse;
    fromJSON(object: any): QueryLeaseResponse;
    toJSON(message: QueryLeaseResponse): unknown;
    fromPartial<I extends {
        lease?: {
            leaseId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
            closedOn?: string | number | Long.Long | undefined;
        } | undefined;
        escrowPayment?: {
            accountId?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            withdrawn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        lease?: ({
            leaseId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } | undefined;
            state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            createdAt?: string | number | Long.Long | undefined;
            closedOn?: string | number | Long.Long | undefined;
        } & {
            leaseId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } & {
                owner?: string | undefined;
                dseq?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["lease"]["leaseId"]["dseq"], keyof Long.Long>, never>) | undefined;
                gseq?: number | undefined;
                oseq?: number | undefined;
                provider?: string | undefined;
            } & Record<Exclude<keyof I["lease"]["leaseId"], keyof LeaseID>, never>) | undefined;
            state?: import("../../../akash/market/v1beta2/lease").Lease_State | undefined;
            price?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["lease"]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            createdAt?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["lease"]["createdAt"], keyof Long.Long>, never>) | undefined;
            closedOn?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["lease"]["closedOn"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["lease"], keyof Lease>, never>) | undefined;
        escrowPayment?: ({
            accountId?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            withdrawn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            accountId?: ({
                scope?: string | undefined;
                xid?: string | undefined;
            } & {
                scope?: string | undefined;
                xid?: string | undefined;
            } & Record<Exclude<keyof I["escrowPayment"]["accountId"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["escrowPayment"]["rate"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["escrowPayment"]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            withdrawn?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["escrowPayment"]["withdrawn"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["escrowPayment"], keyof FractionalPayment>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryLeaseResponse>, never>>(object: I): QueryLeaseResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Orders queries orders with filters */
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    /** Order queries order details */
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    /** Bids queries bids with filters */
    Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    /** Bid queries bid details */
    Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    /** Leases queries leases with filters */
    Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    /** Lease queries lease details */
    Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
    Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
