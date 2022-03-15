import Long from "long";
import _m0 from "protobufjs/minimal";
import { Deployment } from "../../../akash/deployment/v1beta2/deployment";
import { Params } from "../../../akash/deployment/v1beta2/params";
import { Group } from "../../../akash/deployment/v1beta2/group";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
    deployment?: Deployment;
    groups: Group[];
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    deployments: GenesisDeployment[];
    params?: Params;
}
export declare const GenesisDeployment: {
    encode(message: GenesisDeployment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisDeployment;
    fromJSON(object: any): GenesisDeployment;
    toJSON(message: GenesisDeployment): unknown;
    fromPartial(object: DeepPartial<GenesisDeployment>): GenesisDeployment;
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
