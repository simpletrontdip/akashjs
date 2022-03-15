import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgStartGroup } from "../codec/akash/deployment/v1beta2/groupmsg";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";

export interface TxDeploymentGroupStartParams extends TxParams {
  dseq: number,
  gseq: number
}

export class TxDeploymentGroupStart {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(params: TxDeploymentGroupStartParams): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const {
      memo = "",
      fee = defaultFee,
      dseq,
      gseq
    } = params;

    const request: MsgStartGroup = {
      id: {
        owner: owner,
        dseq: new Long(dseq),
        gseq: gseq
      }
    };

    return this.akash.signingClient.deploymentGroupStart(owner, request, fee, memo);
  }
}