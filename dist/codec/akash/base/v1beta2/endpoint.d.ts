import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "akash.base.v1beta2";
/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
    kind: Endpoint_Kind;
    sequenceNumber: number;
}
/** This describes how the endpoint is implemented when the lease is deployed */
export declare enum Endpoint_Kind {
    /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
    SHARED_HTTP = 0,
    /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
    RANDOM_PORT = 1,
    /** LEASED_IP - Describes an endpoint that becomes a leased IP */
    LEASED_IP = 2,
    UNRECOGNIZED = -1
}
export declare function endpoint_KindFromJSON(object: any): Endpoint_Kind;
export declare function endpoint_KindToJSON(object: Endpoint_Kind): string;
export declare const Endpoint: {
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    fromPartial(object: DeepPartial<Endpoint>): Endpoint;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
