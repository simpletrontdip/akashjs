import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "akash.inflation.v1beta2";
/** Params defines the parameters for the x/deployment package */
export interface Params {
    /** InflationDecayFactor is the number of years it takes inflation to halve. */
    inflationDecayFactor: number;
    /**
     * InitialInflation is the rate at which inflation starts at genesis.
     * It is a decimal value in the range [0.0, 100.0].
     */
    initialInflation: string;
    /**
     * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
     * It is a decimal value in the range [0.0, 1.0].
     */
    variance: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        inflationDecayFactor?: number | undefined;
        initialInflation?: string | undefined;
        variance?: string | undefined;
    } & {
        inflationDecayFactor?: number | undefined;
        initialInflation?: string | undefined;
        variance?: string | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
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
