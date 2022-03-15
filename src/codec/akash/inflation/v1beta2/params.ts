/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.inflation.v1beta2";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  /** InflationDecayFactor is the number of years it takes inflation to halve. */
  inflationDecayFactor: number;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initialInflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}

function createBaseParams(): Params {
  return { inflationDecayFactor: 0, initialInflation: "", variance: "" };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inflationDecayFactor !== 0) {
      writer.uint32(8).uint32(message.inflationDecayFactor);
    }
    if (message.initialInflation !== "") {
      writer.uint32(18).string(message.initialInflation);
    }
    if (message.variance !== "") {
      writer.uint32(26).string(message.variance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationDecayFactor = reader.uint32();
          break;
        case 2:
          message.initialInflation = reader.string();
          break;
        case 3:
          message.variance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      inflationDecayFactor: isSet(object.inflationDecayFactor)
        ? Number(object.inflationDecayFactor)
        : 0,
      initialInflation: isSet(object.initialInflation)
        ? String(object.initialInflation)
        : "",
      variance: isSet(object.variance) ? String(object.variance) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.inflationDecayFactor !== undefined &&
      (obj.inflationDecayFactor = Math.round(message.inflationDecayFactor));
    message.initialInflation !== undefined &&
      (obj.initialInflation = message.initialInflation);
    message.variance !== undefined && (obj.variance = message.variance);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.inflationDecayFactor = object.inflationDecayFactor ?? 0;
    message.initialInflation = object.initialInflation ?? "";
    message.variance = object.variance ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
