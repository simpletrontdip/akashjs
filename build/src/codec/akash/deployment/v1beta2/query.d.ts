import Long from "long";
import _m0 from "protobufjs/minimal";
import { DeploymentFilters, DeploymentID, Deployment } from "../../../akash/deployment/v1beta2/deployment";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "../../../akash/escrow/v1beta2/types";
import { GroupID } from "../../../akash/deployment/v1beta2/groupid";
import { Group } from "../../../akash/deployment/v1beta2/group";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
    filters?: DeploymentFilters;
    pagination?: PageRequest;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
    deployments: QueryDeploymentResponse[];
    pagination?: PageResponse;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
    id?: DeploymentID;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
    deployment?: Deployment;
    groups: Group[];
    escrowAccount?: Account;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
    id?: GroupID;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
    group?: Group;
}
export declare const QueryDeploymentsRequest: {
    encode(message: QueryDeploymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentsRequest;
    fromJSON(object: any): QueryDeploymentsRequest;
    toJSON(message: QueryDeploymentsRequest): unknown;
    fromPartial<I extends {
        filters?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
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
            state?: string | undefined;
        } & Record<Exclude<keyof I["filters"], keyof DeploymentFilters>, never>) | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryDeploymentsRequest>, never>>(object: I): QueryDeploymentsRequest;
};
export declare const QueryDeploymentsResponse: {
    encode(message: QueryDeploymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentsResponse;
    fromJSON(object: any): QueryDeploymentsResponse;
    toJSON(message: QueryDeploymentsResponse): unknown;
    fromPartial<I extends {
        deployments?: {
            deployment?: {
                deploymentId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
                version?: Uint8Array | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            groups?: {
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
        deployments?: ({
            deployment?: {
                deploymentId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
                version?: Uint8Array | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            groups?: {
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
            deployment?: {
                deploymentId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
                version?: Uint8Array | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            groups?: {
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
            deployment?: ({
                deploymentId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
                version?: Uint8Array | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } & {
                deploymentId?: ({
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
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
                    } & Record<Exclude<keyof I["deployments"][number]["deployment"]["deploymentId"]["dseq"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["deployments"][number]["deployment"]["deploymentId"], keyof DeploymentID>, never>) | undefined;
                state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
                version?: Uint8Array | undefined;
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
                } & Record<Exclude<keyof I["deployments"][number]["deployment"]["createdAt"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["deployments"][number]["deployment"], keyof Deployment>, never>) | undefined;
            groups?: ({
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
                groupId?: ({
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
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
                    } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupId"]["dseq"], keyof Long.Long>, never>) | undefined;
                    gseq?: number | undefined;
                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupId"], keyof GroupID>, never>) | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: ({
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
                            allOf?: (string[] & string[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                            anyOf?: (string[] & string[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                                attributes?: ({
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] & ({
                                    key?: string | undefined;
                                    value?: string | undefined;
                                } & {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                                attributes?: ({
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] & ({
                                    key?: string | undefined;
                                    value?: string | undefined;
                                } & {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                                attributes?: ({
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[] & ({
                                    key?: string | undefined;
                                    value?: string | undefined;
                                } & {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                                    key?: string | undefined;
                                    value?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"], keyof {
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
                            } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"], keyof {
                                kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                                sequenceNumber?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                        count?: number | undefined;
                        price?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                    } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"][number], keyof import("./resource").Resource>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"]["resources"], keyof {
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
                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["groupSpec"], keyof import("./groupspec").GroupSpec>, never>) | undefined;
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
                } & Record<Exclude<keyof I["deployments"][number]["groups"][number]["createdAt"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["deployments"][number]["groups"][number], keyof Group>, never>)[] & Record<Exclude<keyof I["deployments"][number]["groups"], keyof {
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["id"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
                owner?: string | undefined;
                state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
                balance?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                transferred?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["transferred"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
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
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["settledAt"], keyof Long.Long>, never>) | undefined;
                depositor?: string | undefined;
                funds?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"]["funds"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            } & Record<Exclude<keyof I["deployments"][number]["escrowAccount"], keyof Account>, never>) | undefined;
        } & Record<Exclude<keyof I["deployments"][number], keyof QueryDeploymentResponse>, never>)[] & Record<Exclude<keyof I["deployments"], keyof {
            deployment?: {
                deploymentId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
                version?: Uint8Array | undefined;
                createdAt?: string | number | Long.Long | undefined;
            } | undefined;
            groups?: {
                groupId?: {
                    owner?: string | undefined;
                    dseq?: string | number | Long.Long | undefined;
                    gseq?: number | undefined;
                } | undefined;
                state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
                groupSpec?: {
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
    } & Record<Exclude<keyof I, keyof QueryDeploymentsResponse>, never>>(object: I): QueryDeploymentsResponse;
};
export declare const QueryDeploymentRequest: {
    encode(message: QueryDeploymentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentRequest;
    fromJSON(object: any): QueryDeploymentRequest;
    toJSON(message: QueryDeploymentRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        id?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
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
        } & Record<Exclude<keyof I["id"], keyof DeploymentID>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryDeploymentRequest;
};
export declare const QueryDeploymentResponse: {
    encode(message: QueryDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDeploymentResponse;
    fromJSON(object: any): QueryDeploymentResponse;
    toJSON(message: QueryDeploymentResponse): unknown;
    fromPartial<I extends {
        deployment?: {
            deploymentId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
            version?: Uint8Array | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } | undefined;
        groups?: {
            groupId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: {
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
        deployment?: ({
            deploymentId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
            version?: Uint8Array | undefined;
            createdAt?: string | number | Long.Long | undefined;
        } & {
            deploymentId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
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
                } & Record<Exclude<keyof I["deployment"]["deploymentId"]["dseq"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["deployment"]["deploymentId"], keyof DeploymentID>, never>) | undefined;
            state?: import("../../../akash/deployment/v1beta2/deployment").Deployment_State | undefined;
            version?: Uint8Array | undefined;
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
            } & Record<Exclude<keyof I["deployment"]["createdAt"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["deployment"], keyof Deployment>, never>) | undefined;
        groups?: ({
            groupId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: {
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
            groupId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: {
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
            groupId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
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
                } & Record<Exclude<keyof I["groups"][number]["groupId"]["dseq"], keyof Long.Long>, never>) | undefined;
                gseq?: number | undefined;
            } & Record<Exclude<keyof I["groups"][number]["groupId"], keyof GroupID>, never>) | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: ({
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
                        allOf?: (string[] & string[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                        anyOf?: (string[] & string[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["storage"], keyof {
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
                        } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"]["endpoints"], keyof {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                    count?: number | undefined;
                    price?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                } & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"][number], keyof import("./resource").Resource>, never>)[] & Record<Exclude<keyof I["groups"][number]["groupSpec"]["resources"], keyof {
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
            } & Record<Exclude<keyof I["groups"][number]["groupSpec"], keyof import("./groupspec").GroupSpec>, never>) | undefined;
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
            } & Record<Exclude<keyof I["groups"][number]["createdAt"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["groups"][number], keyof Group>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
            groupId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: {
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
    } & Record<Exclude<keyof I, keyof QueryDeploymentResponse>, never>>(object: I): QueryDeploymentResponse;
};
export declare const QueryGroupRequest: {
    encode(message: QueryGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGroupRequest;
    fromJSON(object: any): QueryGroupRequest;
    toJSON(message: QueryGroupRequest): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
        } | undefined;
    } & {
        id?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
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
        } & Record<Exclude<keyof I["id"], keyof GroupID>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryGroupRequest;
};
export declare const QueryGroupResponse: {
    encode(message: QueryGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGroupResponse;
    fromJSON(object: any): QueryGroupResponse;
    toJSON(message: QueryGroupResponse): unknown;
    fromPartial<I extends {
        group?: {
            groupId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: {
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
        group?: ({
            groupId?: {
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
            } | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: {
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
            groupId?: ({
                owner?: string | undefined;
                dseq?: string | number | Long.Long | undefined;
                gseq?: number | undefined;
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
                } & Record<Exclude<keyof I["group"]["groupId"]["dseq"], keyof Long.Long>, never>) | undefined;
                gseq?: number | undefined;
            } & Record<Exclude<keyof I["group"]["groupId"], keyof GroupID>, never>) | undefined;
            state?: import("../../../akash/deployment/v1beta2/group").Group_State | undefined;
            groupSpec?: ({
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
                        allOf?: (string[] & string[] & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                        anyOf?: (string[] & string[] & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["group"]["groupSpec"]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                            attributes?: ({
                                key?: string | undefined;
                                value?: string | undefined;
                            }[] & ({
                                key?: string | undefined;
                                value?: string | undefined;
                            } & {
                                key?: string | undefined;
                                value?: string | undefined;
                            } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                                key?: string | undefined;
                                value?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["storage"], keyof {
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
                        } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"]["endpoints"], keyof {
                            kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                            sequenceNumber?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                    count?: number | undefined;
                    price?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
                } & Record<Exclude<keyof I["group"]["groupSpec"]["resources"][number], keyof import("./resource").Resource>, never>)[] & Record<Exclude<keyof I["group"]["groupSpec"]["resources"], keyof {
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
            } & Record<Exclude<keyof I["group"]["groupSpec"], keyof import("./groupspec").GroupSpec>, never>) | undefined;
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
            } & Record<Exclude<keyof I["group"]["createdAt"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["group"], keyof Group>, never>) | undefined;
    } & Record<Exclude<keyof I, "group">, never>>(object: I): QueryGroupResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    /** Deployment queries deployment details */
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    /** Group queries group details */
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
    Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
    Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
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
