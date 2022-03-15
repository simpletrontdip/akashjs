import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "akash.cert.v1beta2";
/** CertificateID stores owner and sequence number */
export interface CertificateID {
    owner: string;
    serial: string;
}
/** Certificate stores state, certificate and it's public key */
export interface Certificate {
    state: Certificate_State;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
/** State is an enum which refers to state of deployment */
export declare enum Certificate_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** valid - CertificateValid denotes state for deployment active */
    valid = 1,
    /** revoked - CertificateRevoked denotes state for deployment closed */
    revoked = 2,
    UNRECOGNIZED = -1
}
export declare function certificate_StateFromJSON(object: any): Certificate_State;
export declare function certificate_StateToJSON(object: Certificate_State): string;
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
    owner: string;
    serial: string;
    state: string;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
    id?: CertificateID;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {
}
export declare const CertificateID: {
    encode(message: CertificateID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CertificateID;
    fromJSON(object: any): CertificateID;
    toJSON(message: CertificateID): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        serial?: string | undefined;
    } & {
        owner?: string | undefined;
        serial?: string | undefined;
    } & Record<Exclude<keyof I, keyof CertificateID>, never>>(object: I): CertificateID;
};
export declare const Certificate: {
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    fromPartial<I extends {
        state?: Certificate_State | undefined;
        cert?: Uint8Array | undefined;
        pubkey?: Uint8Array | undefined;
    } & {
        state?: Certificate_State | undefined;
        cert?: Uint8Array | undefined;
        pubkey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Certificate>, never>>(object: I): Certificate;
};
export declare const CertificateFilter: {
    encode(message: CertificateFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CertificateFilter;
    fromJSON(object: any): CertificateFilter;
    toJSON(message: CertificateFilter): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        serial?: string | undefined;
        state?: string | undefined;
    } & {
        owner?: string | undefined;
        serial?: string | undefined;
        state?: string | undefined;
    } & Record<Exclude<keyof I, keyof CertificateFilter>, never>>(object: I): CertificateFilter;
};
export declare const MsgCreateCertificate: {
    encode(message: MsgCreateCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateCertificate;
    fromJSON(object: any): MsgCreateCertificate;
    toJSON(message: MsgCreateCertificate): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        cert?: Uint8Array | undefined;
        pubkey?: Uint8Array | undefined;
    } & {
        owner?: string | undefined;
        cert?: Uint8Array | undefined;
        pubkey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateCertificate>, never>>(object: I): MsgCreateCertificate;
};
export declare const MsgCreateCertificateResponse: {
    encode(_: MsgCreateCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateCertificateResponse;
    fromJSON(_: any): MsgCreateCertificateResponse;
    toJSON(_: MsgCreateCertificateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateCertificateResponse;
};
export declare const MsgRevokeCertificate: {
    encode(message: MsgRevokeCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRevokeCertificate;
    fromJSON(object: any): MsgRevokeCertificate;
    toJSON(message: MsgRevokeCertificate): unknown;
    fromPartial<I extends {
        id?: {
            owner?: string | undefined;
            serial?: string | undefined;
        } | undefined;
    } & {
        id?: ({
            owner?: string | undefined;
            serial?: string | undefined;
        } & {
            owner?: string | undefined;
            serial?: string | undefined;
        } & Record<Exclude<keyof I["id"], keyof CertificateID>, never>) | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgRevokeCertificate;
};
export declare const MsgRevokeCertificateResponse: {
    encode(_: MsgRevokeCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRevokeCertificateResponse;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    toJSON(_: MsgRevokeCertificateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRevokeCertificateResponse;
};
/** Msg defines the provider Msg service */
export interface Msg {
    /** CreateCertificate defines a method to create new certificate given proper inputs. */
    CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    /** RevokeCertificate defines a method to revoke the certificate */
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
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
