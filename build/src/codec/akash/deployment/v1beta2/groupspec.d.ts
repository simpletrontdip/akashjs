import Long from "long";
import _m0 from "protobufjs/minimal";
import { PlacementRequirements } from "../../../akash/base/v1beta2/attribute";
import { Resource } from "../../../akash/deployment/v1beta2/resource";
export declare const protobufPackage = "akash.deployment.v1beta2";
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements?: PlacementRequirements;
    resources: Resource[];
}
export declare const GroupSpec: {
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GroupSpec;
    fromJSON(object: any): GroupSpec;
    toJSON(message: GroupSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        requirements?: {
            signedBy?: {
                allOf?: string[] | undefined;
                anyOf?: string[] | undefined;
            } | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } | undefined;
        resources?: {
            resources?: {
                cpu?: {
                    units?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                memory?: {
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                storage?: {
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                endpoints?: {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[] | undefined;
            } | undefined;
            count?: number | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        requirements?: ({
            signedBy?: {
                allOf?: string[] | undefined;
                anyOf?: string[] | undefined;
            } | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } & {
            signedBy?: ({
                allOf?: string[] | undefined;
                anyOf?: string[] | undefined;
            } & {
                allOf?: (string[] & string[] & Record<Exclude<keyof I["requirements"]["signedBy"]["allOf"], keyof string[]>, never>) | undefined;
                anyOf?: (string[] & string[] & Record<Exclude<keyof I["requirements"]["signedBy"]["anyOf"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["requirements"]["signedBy"], keyof import("../../../akash/base/v1beta2/attribute").SignedBy>, never>) | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["requirements"]["attributes"][number], keyof import("../../../akash/base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["requirements"]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["requirements"], keyof PlacementRequirements>, never>) | undefined;
        resources?: ({
            resources?: {
                cpu?: {
                    units?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                memory?: {
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                storage?: {
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                endpoints?: {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[] | undefined;
            } | undefined;
            count?: number | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            resources?: {
                cpu?: {
                    units?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                memory?: {
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                storage?: {
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                endpoints?: {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[] | undefined;
            } | undefined;
            count?: number | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            resources?: ({
                cpu?: {
                    units?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                memory?: {
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                storage?: {
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                endpoints?: {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[] | undefined;
            } & {
                cpu?: ({
                    units?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    units?: ({
                        val?: Uint8Array | undefined;
                    } & {
                        val?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"]["units"], "val">, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"]["attributes"][number], keyof import("../../../akash/base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["cpu"], keyof import("../../base/v1beta2/resource").CPU>, never>) | undefined;
                memory?: ({
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    quantity?: ({
                        val?: Uint8Array | undefined;
                    } & {
                        val?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["memory"]["quantity"], "val">, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["memory"]["attributes"][number], keyof import("../../../akash/base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["memory"]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["memory"], keyof import("../../base/v1beta2/resource").Memory>, never>) | undefined;
                storage?: ({
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    name?: string | undefined;
                    quantity?: ({
                        val?: Uint8Array | undefined;
                    } & {
                        val?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["storage"][number]["quantity"], "val">, never>) | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["resources"][number]["resources"]["storage"][number]["attributes"][number], keyof import("../../../akash/base/v1beta2/attribute").Attribute>, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["storage"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["storage"][number], keyof import("../../base/v1beta2/resource").Storage>, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["storage"], keyof {
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
                endpoints?: ({
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[] & ({
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                } & {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                } & Record<Exclude<keyof I["resources"][number]["resources"]["endpoints"][number], keyof import("../../base/v1beta2/endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["resources"][number]["resources"]["endpoints"], keyof {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["resources"][number]["resources"], keyof import("../../base/v1beta2/resourceunits").ResourceUnits>, never>) | undefined;
            count?: number | undefined;
            price?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["resources"][number]["price"], keyof import("../../../cosmos/base/v1beta1/coin").DecCoin>, never>) | undefined;
        } & Record<Exclude<keyof I["resources"][number], keyof Resource>, never>)[] & Record<Exclude<keyof I["resources"], keyof {
            resources?: {
                cpu?: {
                    units?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                memory?: {
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } | undefined;
                storage?: {
                    name?: string | undefined;
                    quantity?: {
                        val?: Uint8Array | undefined;
                    } | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                endpoints?: {
                    kind?: import("../../base/v1beta2/endpoint").Endpoint_Kind | undefined;
                    sequenceNumber?: number | undefined;
                }[] | undefined;
            } | undefined;
            count?: number | undefined;
            price?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GroupSpec>, never>>(object: I): GroupSpec;
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
