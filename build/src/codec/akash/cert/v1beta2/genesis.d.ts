import Long from "long";
import _m0 from "protobufjs/minimal";
import { Certificate } from "../../../akash/cert/v1beta2/cert";
export declare const protobufPackage = "akash.cert.v1beta2";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
    owner: string;
    certificate?: Certificate;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
    certificates: GenesisCertificate[];
}
export declare const GenesisCertificate: {
    encode(message: GenesisCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisCertificate;
    fromJSON(object: any): GenesisCertificate;
    toJSON(message: GenesisCertificate): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        certificate?: {
            state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
            cert?: Uint8Array | undefined;
            pubkey?: Uint8Array | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        certificate?: ({
            state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
            cert?: Uint8Array | undefined;
            pubkey?: Uint8Array | undefined;
        } & {
            state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
            cert?: Uint8Array | undefined;
            pubkey?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["certificate"], keyof Certificate>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisCertificate>, never>>(object: I): GenesisCertificate;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        certificates?: {
            owner?: string | undefined;
            certificate?: {
                state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
                cert?: Uint8Array | undefined;
                pubkey?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        certificates?: ({
            owner?: string | undefined;
            certificate?: {
                state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
                cert?: Uint8Array | undefined;
                pubkey?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            owner?: string | undefined;
            certificate?: {
                state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
                cert?: Uint8Array | undefined;
                pubkey?: Uint8Array | undefined;
            } | undefined;
        } & {
            owner?: string | undefined;
            certificate?: ({
                state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
                cert?: Uint8Array | undefined;
                pubkey?: Uint8Array | undefined;
            } & {
                state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
                cert?: Uint8Array | undefined;
                pubkey?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["certificates"][number]["certificate"], keyof Certificate>, never>) | undefined;
        } & Record<Exclude<keyof I["certificates"][number], keyof GenesisCertificate>, never>)[] & Record<Exclude<keyof I["certificates"], keyof {
            owner?: string | undefined;
            certificate?: {
                state?: import("../../../akash/cert/v1beta2/cert").Certificate_State | undefined;
                cert?: Uint8Array | undefined;
                pubkey?: Uint8Array | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "certificates">, never>>(object: I): GenesisState;
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
