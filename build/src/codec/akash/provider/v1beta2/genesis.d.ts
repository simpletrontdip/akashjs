import Long from "long";
import _m0 from "protobufjs/minimal";
import { Provider } from "../../../akash/provider/v1beta2/provider";
export declare const protobufPackage = "akash.provider.v1beta2";
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
    providers: Provider[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        providers?: {
            owner?: string | undefined;
            hostUri?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            info?: {
                email?: string | undefined;
                website?: string | undefined;
            } | undefined;
            jwtHostUri?: string | undefined;
        }[] | undefined;
    } & {
        providers?: ({
            owner?: string | undefined;
            hostUri?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            info?: {
                email?: string | undefined;
                website?: string | undefined;
            } | undefined;
            jwtHostUri?: string | undefined;
        }[] & ({
            owner?: string | undefined;
            hostUri?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            info?: {
                email?: string | undefined;
                website?: string | undefined;
            } | undefined;
            jwtHostUri?: string | undefined;
        } & {
            owner?: string | undefined;
            hostUri?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["providers"][number]["attributes"][number], keyof import("../../base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["providers"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
            info?: ({
                email?: string | undefined;
                website?: string | undefined;
            } & {
                email?: string | undefined;
                website?: string | undefined;
            } & Record<Exclude<keyof I["providers"][number]["info"], keyof import("../../../akash/provider/v1beta2/provider").ProviderInfo>, never>) | undefined;
            jwtHostUri?: string | undefined;
        } & Record<Exclude<keyof I["providers"][number], keyof Provider>, never>)[] & Record<Exclude<keyof I["providers"], keyof {
            owner?: string | undefined;
            hostUri?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            info?: {
                email?: string | undefined;
                website?: string | undefined;
            } | undefined;
            jwtHostUri?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "providers">, never>>(object: I): GenesisState;
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
