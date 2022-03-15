import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgDepositDeployment } from "../codec/akash/deployment/v1beta2/deploymentmsg";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { Coin } from "../codec/cosmos/base/v1beta1/coin";

export interface TxDeploymentDepositParams extends TxParams {
  dseq: number;
  amount: Coin;
  depositor: string;
}

export class TxDeploymentDeposit {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(
    params: TxDeploymentDepositParams
  ): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const { memo = "", fee = defaultFee, dseq, amount, depositor } = params;

    const request: MsgDepositDeployment = {
      id: {
        owner: owner,
        dseq: new Long(dseq),
      },
      amount: amount,
      depositor: depositor,
    };

    return this.akash.signingClient.deploymentDeposit(
      owner,
      request,
      fee,
      memo
    );
  }
}
