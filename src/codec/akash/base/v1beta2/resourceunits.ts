/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CPU, Memory, Storage } from "../../../akash/base/v1beta2/resource";
import { Endpoint } from "../../../akash/base/v1beta2/endpoint";

export const protobufPackage = "akash.base.v1beta2";

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU;
  memory?: Memory;
  storage: Storage[];
  endpoints: Endpoint[];
}

function createBaseResourceUnits(): ResourceUnits {
  return { cpu: undefined, memory: undefined, storage: [], endpoints: [] };
}

export const ResourceUnits = {
  encode(
    message: ResourceUnits,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = CPU.decode(reader, reader.uint32());
          break;
        case 2:
          message.memory = Memory.decode(reader, reader.uint32());
          break;
        case 3:
          message.storage.push(Storage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceUnits {
    return {
      cpu: isSet(object.cpu) ? CPU.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromJSON(object.memory) : undefined,
      storage: Array.isArray(object?.storage)
        ? object.storage.map((e: any) => Storage.fromJSON(e))
        : [],
      endpoints: Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => Endpoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResourceUnits): unknown {
    const obj: any = {};
    message.cpu !== undefined &&
      (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined &&
      (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    if (message.storage) {
      obj.storage = message.storage.map((e) =>
        e ? Storage.toJSON(e) : undefined
      );
    } else {
      obj.storage = [];
    }
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) =>
        e ? Endpoint.toJSON(e) : undefined
      );
    } else {
      obj.endpoints = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits {
    const message = createBaseResourceUnits();
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? CPU.fromPartial(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Memory.fromPartial(object.memory)
        : undefined;
    message.storage = object.storage?.map((e) => Storage.fromPartial(e)) || [];
    message.endpoints =
      object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
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
