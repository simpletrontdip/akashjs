import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../akash/inflation/v1beta2/params";
export declare const protobufPackage = "akash.inflation.v1beta2";
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            inflationDecayFactor?: number | undefined;
            initialInflation?: string | undefined;
            variance?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            inflationDecayFactor?: number | undefined;
            initialInflation?: string | undefined;
            variance?: string | undefined;
        } & {
            inflationDecayFactor?: number | undefined;
            initialInflation?: string | undefined;
            variance?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
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
