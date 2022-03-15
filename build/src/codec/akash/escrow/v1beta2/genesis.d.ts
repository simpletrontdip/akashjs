import Long from "long";
import _m0 from "protobufjs/minimal";
import { Account, FractionalPayment } from "../../../akash/escrow/v1beta2/types";
export declare const protobufPackage = "akash.escrow.v1beta2";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
    accounts: Account[];
    payments: FractionalPayment[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        accounts?: {
            id?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            transferred?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            settledAt?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        payments?: {
            accountId?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            withdrawn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        accounts?: ({
            id?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            transferred?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            settledAt?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            id?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            transferred?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            settledAt?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            id?: ({
                scope?: string | undefined;
                xid?: string | undefined;
            } & {
                scope?: string | undefined;
                xid?: string | undefined;
            } & Record<Exclude<keyof I["accounts"][number]["id"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["accounts"][number]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            transferred?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["accounts"][number]["transferred"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            settledAt?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["accounts"][number]["settledAt"], keyof Long.Long>, never>) | undefined;
            depositor?: string | undefined;
            funds?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["accounts"][number]["funds"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
        } & Record<Exclude<keyof I["accounts"][number], keyof Account>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            id?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").Account_State | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            transferred?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            settledAt?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        payments?: ({
            accountId?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            withdrawn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            accountId?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            withdrawn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            accountId?: ({
                scope?: string | undefined;
                xid?: string | undefined;
            } & {
                scope?: string | undefined;
                xid?: string | undefined;
            } & Record<Exclude<keyof I["payments"][number]["accountId"], keyof import("../../../akash/escrow/v1beta2/types").AccountID>, never>) | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["payments"][number]["rate"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["payments"][number]["balance"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
            withdrawn?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["payments"][number]["withdrawn"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["payments"][number], keyof FractionalPayment>, never>)[] & Record<Exclude<keyof I["payments"], keyof {
            accountId?: {
                scope?: string | undefined;
                xid?: string | undefined;
            } | undefined;
            paymentId?: string | undefined;
            owner?: string | undefined;
            state?: import("../../../akash/escrow/v1beta2/types").FractionalPayment_State | undefined;
            rate?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            withdrawn?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
