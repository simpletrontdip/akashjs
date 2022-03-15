import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceUnits } from "../../../akash/base/v1beta2/resourceunits";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** Resource stores unit, total count and price of resource */
export interface Resource {
    resources?: ResourceUnits;
    count: number;
    price?: DecCoin;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["resources"]["cpu"]["units"], "val">, never>) | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["resources"]["cpu"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["resources"]["cpu"]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
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
                } & Record<Exclude<keyof I["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["resources"]["memory"]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["resources"]["memory"]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
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
                } & Record<Exclude<keyof I["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["resources"]["storage"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["resources"]["storage"][number]["attributes"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["resources"]["storage"], keyof {
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
            } & Record<Exclude<keyof I["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["resources"]["endpoints"], keyof {
                kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                sequenceNumber?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["resources"], keyof ResourceUnits>, never>) | undefined;
        count?: number | undefined;
        price?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["price"], keyof DecCoin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Resource>, never>>(object: I): Resource;
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
