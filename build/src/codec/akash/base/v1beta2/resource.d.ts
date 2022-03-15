import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceValue } from "../../../akash/base/v1beta2/resourcevalue";
import { Attribute } from "../../../akash/base/v1beta2/attribute";
export declare const protobufPackage = "akash.base.v1beta2";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
    units?: ResourceValue;
    attributes: Attribute[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
    quantity?: ResourceValue;
    attributes: Attribute[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
    name: string;
    quantity?: ResourceValue;
    attributes: Attribute[];
}
export declare const CPU: {
    encode(message: CPU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CPU;
    fromJSON(object: any): CPU;
    toJSON(message: CPU): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["units"], "val">, never>) | undefined;
        attributes?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CPU>, never>>(object: I): CPU;
};
export declare const Memory: {
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["quantity"], "val">, never>) | undefined;
        attributes?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Memory>, never>>(object: I): Memory;
};
export declare const Storage: {
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["quantity"], "val">, never>) | undefined;
        attributes?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["attributes"][number], keyof Attribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Storage>, never>>(object: I): Storage;
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
