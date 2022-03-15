import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceUnits } from "../../../akash/base/v1beta2/resourceunits";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** Resource stores unit, total count and price of resource */
export interface Resource {
    resources?: ResourceUnits;
    count: number;
    price?: DecCoin;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial(object: DeepPartial<Resource>): Resource;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
