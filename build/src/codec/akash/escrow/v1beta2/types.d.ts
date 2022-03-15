import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "akash.escrow.v1beta2";
/** AccountID is the account identifier */
export interface AccountID {
    scope: string;
    xid: string;
}
/** Account stores state for an escrow account */
export interface Account {
    /** unique identifier for this escrow account */
    id?: AccountID;
    /** bech32 encoded account address of the owner of this escrow account */
    owner: string;
    /** current state of this escrow account */
    state: Account_State;
    /** unspent coins received from the owner's wallet */
    balance?: DecCoin;
    /** total coins spent by this account */
    transferred?: DecCoin;
    /** block height at which this account was last settled */
    settledAt: Long;
    /**
     * bech32 encoded account address of the depositor.
     * If depositor is same as the owner, then any incoming coins are added to the Balance.
     * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
     */
    depositor: string;
    /**
     * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
     * If there are any funds, they should be spent before spending the Balance.
     */
    funds?: DecCoin;
}
/** State stores state for an escrow account */
export declare enum Account_State {
    /** invalid - AccountStateInvalid is an invalid state */
    invalid = 0,
    /** open - AccountOpen is the state when an account is open */
    open = 1,
    /** closed - AccountClosed is the state when an account is closed */
    closed = 2,
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function account_StateFromJSON(object: any): Account_State;
export declare function account_StateToJSON(object: Account_State): string;
/** Payment stores state for a payment */
export interface FractionalPayment {
    accountId?: AccountID;
    paymentId: string;
    owner: string;
    state: FractionalPayment_State;
    rate?: DecCoin;
    balance?: DecCoin;
    withdrawn?: Coin;
}
/** Payment State */
export declare enum FractionalPayment_State {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    invalid = 0,
    /** open - PaymentStateOpen is the state when the payment is open */
    open = 1,
    /** closed - PaymentStateClosed is the state when the payment is closed */
    closed = 2,
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    overdrawn = 3,
    UNRECOGNIZED = -1
}
export declare function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State;
export declare function fractionalPayment_StateToJSON(object: FractionalPayment_State): string;
export declare const AccountID: {
    encode(message: AccountID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccountID;
    fromJSON(object: any): AccountID;
    toJSON(message: AccountID): unknown;
    fromPartial<I extends {
        scope?: string | undefined;
        xid?: string | undefined;
    } & {
        scope?: string | undefined;
        xid?: string | undefined;
    } & Record<Exclude<keyof I, keyof AccountID>, never>>(object: I): AccountID;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    fromPartial<I extends {
        id?: {
            scope?: string | undefined;
            xid?: string | undefined;
        } | undefined;
        owner?: string | undefined;
        state?: Account_State | undefined;
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
        } & Record<Exclude<keyof I["id"], keyof AccountID>, never>) | undefined;
        owner?: string | undefined;
        state?: Account_State | undefined;
        balance?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["balance"], keyof DecCoin>, never>) | undefined;
        transferred?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["transferred"], keyof DecCoin>, never>) | undefined;
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
        } & Record<Exclude<keyof I["settledAt"], keyof Long.Long>, never>) | undefined;
        depositor?: string | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funds"], keyof DecCoin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Account>, never>>(object: I): Account;
};
export declare const FractionalPayment: {
    encode(message: FractionalPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FractionalPayment;
    fromJSON(object: any): FractionalPayment;
    toJSON(message: FractionalPayment): unknown;
    fromPartial<I extends {
        accountId?: {
            scope?: string | undefined;
            xid?: string | undefined;
        } | undefined;
        paymentId?: string | undefined;
        owner?: string | undefined;
        state?: FractionalPayment_State | undefined;
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
        } & Record<Exclude<keyof I["accountId"], keyof AccountID>, never>) | undefined;
        paymentId?: string | undefined;
        owner?: string | undefined;
        state?: FractionalPayment_State | undefined;
        rate?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["rate"], keyof DecCoin>, never>) | undefined;
        balance?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["balance"], keyof DecCoin>, never>) | undefined;
        withdrawn?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["withdrawn"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof FractionalPayment>, never>>(object: I): FractionalPayment;
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
