import Long from "long";
import _m0 from "protobufjs/minimal";
import { DeploymentID } from "../../../akash/deployment/v1beta2/deployment";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec } from "../../../akash/deployment/v1beta2/groupspec";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id?: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit?: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id?: DeploymentID;
    amount?: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id?: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id?: DeploymentID;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
}
export declare const MsgCreateDeployment: {
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateDeployment;
    fromJSON(object: any): MsgCreateDeployment;
    toJSON(message: MsgCreateDeployment): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
        } | undefined;
        groups?: {
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
        }[] | undefined;
        version?: Uint8Array | undefined;
        deposit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        depositor?: string | undefined;
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
        groups?: ({
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
        }[] & ({
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
                    allOf?: (string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                    anyOf?: (string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["groups"][number]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"], keyof {
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
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"], keyof {
                        kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                        sequenceNumber?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                count?: number | undefined;
                price?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            } & Record<Exclude<keyof I["groups"][number]["resources"][number], keyof import("./resource").Resource>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"], keyof {
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
        } & Record<Exclude<keyof I["groups"][number], keyof GroupSpec>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
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
        }[]>, never>) | undefined;
        version?: Uint8Array | undefined;
        deposit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["deposit"], keyof Coin>, never>) | undefined;
        depositor?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateDeployment>, never>>(object: I): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateDeploymentResponse;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    toJSON(_: MsgCreateDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositDeployment;
    fromJSON(object: any): MsgDepositDeployment;
    toJSON(message: MsgDepositDeployment): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
        } | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        depositor?: string | undefined;
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
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
        depositor?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgDepositDeployment>, never>>(object: I): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositDeploymentResponse;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    toJSON(_: MsgDepositDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateDeployment;
    fromJSON(object: any): MsgUpdateDeployment;
    toJSON(message: MsgUpdateDeployment): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
        } | undefined;
        groups?: {
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
        }[] | undefined;
        version?: Uint8Array | undefined;
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
        groups?: ({
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
        }[] & ({
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
                    allOf?: (string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                    anyOf?: (string[] & string[] & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["signedBy"], keyof import("../../base/v1beta2/attribute").SignedBy>, never>) | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["requirements"]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["groups"][number]["requirements"], keyof import("../../base/v1beta2/attribute").PlacementRequirements>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["storage"], keyof {
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
                    } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"]["endpoints"], keyof {
                        kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                        sequenceNumber?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
                count?: number | undefined;
                price?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["groups"][number]["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            } & Record<Exclude<keyof I["groups"][number]["resources"][number], keyof import("./resource").Resource>, never>)[] & Record<Exclude<keyof I["groups"][number]["resources"], keyof {
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
        } & Record<Exclude<keyof I["groups"][number], keyof GroupSpec>, never>)[] & Record<Exclude<keyof I["groups"], keyof {
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
        }[]>, never>) | undefined;
        version?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateDeployment>, never>>(object: I): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateDeploymentResponse;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    toJSON(_: MsgUpdateDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCloseDeployment;
    fromJSON(object: any): MsgCloseDeployment;
    toJSON(message: MsgCloseDeployment): unknown;
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
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCloseDeploymentResponse;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    toJSON(_: MsgCloseDeploymentResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCloseDeploymentResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
