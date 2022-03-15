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
    fromPartial(object: DeepPartial<CPU>): CPU;
};
export declare const Memory: {
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Memory;
    fromJSON(object: any): Memory;
    toJSON(message: Memory): unknown;
    fromPartial(object: DeepPartial<Memory>): Memory;
};
export declare const Storage: {
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    fromPartial(object: DeepPartial<Storage>): Storage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
