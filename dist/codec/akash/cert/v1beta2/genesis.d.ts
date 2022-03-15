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
    fromPartial(object: DeepPartial<GenesisCertificate>): GenesisCertificate;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
