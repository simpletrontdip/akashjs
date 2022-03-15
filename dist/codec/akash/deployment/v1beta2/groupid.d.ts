import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: Long;
    gseq: number;
}
export declare const GroupID: {
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GroupID;
    fromJSON(object: any): GroupID;
    toJSON(message: GroupID): unknown;
    fromPartial(object: DeepPartial<GroupID>): GroupID;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
