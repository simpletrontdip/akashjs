import Long from "long";
import _m0 from "protobufjs/minimal";
import { CPU, Memory, Storage } from "../../../akash/base/v1beta2/resource";
import { Endpoint } from "../../../akash/base/v1beta2/endpoint";
export declare const protobufPackage = "akash.base.v1beta2";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu?: CPU;
    memory?: Memory;
    storage: Storage[];
    endpoints: Endpoint[];
}
export declare const ResourceUnits: {
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceUnits;
    fromJSON(object: any): ResourceUnits;
    toJSON(message: ResourceUnits): unknown;
    fromPartial<I extends {
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
            kind?: import("../../../akash/base/v1beta2/endpoint").Endpoint_Kind | undefined;
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
            } & Record<Exclude<keyof I["cpu"]["units"], "val">, never>) | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["cpu"]["attributes"][number], keyof import("./attribute").Attribute>, never>)[] & Record<Exclude<keyof I["cpu"]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["cpu"], keyof CPU>, never>) | undefined;
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
            } & Record<Exclude<keyof I["memory"]["quantity"], "val">, never>) | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["memory"]["attributes"][number], keyof import("./attribute").Attribute>, never>)[] & Record<Exclude<keyof I["memory"]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["memory"], keyof Memory>, never>) | undefined;
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
            } & Record<Exclude<keyof I["storage"][number]["quantity"], "val">, never>) | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["storage"][number]["attributes"][number], keyof import("./attribute").Attribute>, never>)[] & Record<Exclude<keyof I["storage"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["storage"][number], keyof Storage>, never>)[] & Record<Exclude<keyof I["storage"], keyof {
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
            kind?: import("../../../akash/base/v1beta2/endpoint").Endpoint_Kind | undefined;
            sequenceNumber?: number | undefined;
        }[] & ({
            kind?: import("../../../akash/base/v1beta2/endpoint").Endpoint_Kind | undefined;
            sequenceNumber?: number | undefined;
        } & {
            kind?: import("../../../akash/base/v1beta2/endpoint").Endpoint_Kind | undefined;
            sequenceNumber?: number | undefined;
        } & Record<Exclude<keyof I["endpoints"][number], keyof Endpoint>, never>)[] & Record<Exclude<keyof I["endpoints"], keyof {
            kind?: import("../../../akash/base/v1beta2/endpoint").Endpoint_Kind | undefined;
            sequenceNumber?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ResourceUnits>, never>>(object: I): ResourceUnits;
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
