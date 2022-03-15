import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  defaultRegistryTypes,
  SigningStargateClient,
  SigningStargateClientOptions,
  BroadcastTxResponse,
} from "@cosmjs/stargate";
import {
  MsgCreateCertificate,
  MsgRevokeCertificate,
} from "../codec/akash/cert/v1beta2/cert";
import {
  MsgCloseDeployment,
  MsgCreateDeployment,
  MsgDepositDeployment,
  MsgUpdateDeployment,
} from "../codec/akash/deployment/v1beta2/deploymentmsg";
import {
  MsgCreateCertificateEncodeObject,
  MsgRevokeCertificateEncodeObject,
  MsgCreateDeploymentEncodeObject,
  MsgCloseDeploymentEncodeObject,
  MsgDepositDeploymentEncodeObject,
  MsgUpdateDeploymentEncodeObject,
  MsgCloseGroupEncodeObject,
  MsgPauseGroupEncodeObject,
  MsgStartGroupEncodeObject,
  MsgCreateLeaseEncodeObject,
} from "./encodeobjects";
import {
  MsgCloseGroup,
  MsgPauseGroup,
  MsgStartGroup,
} from "../codec/akash/deployment/v1beta2/groupmsg";
import { MsgCreateLease } from "../codec/akash/market/v1beta2/lease";


function akashRegistry(): Registry {
  return new Registry([
    ...defaultRegistryTypes,
    ["/akash.cert.v1beta2.MsgCreateCertificate", MsgCreateCertificate],
    ["/akash.cert.v1beta2.MsgRevokeCertificate", MsgRevokeCertificate],
    ["/akash.deployment.v1beta2.MsgCreateDeployment", MsgCreateDeployment],
    ["/akash.deployment.v1beta2.MsgCloseDeployment", MsgCloseDeployment],
    ["/akash.deployment.v1beta2.MsgDepositDeployment", MsgDepositDeployment],
    ["/akash.deployment.v1beta2.MsgUpdateDeployment", MsgUpdateDeployment],
    ["/akash.deployment.v1beta2.MsgCloseGroup", MsgCloseGroup],
    ["/akash.deployment.v1beta2.MsgPauseGroup", MsgPauseGroup],
    ["/akash.deployment.v1beta2.MsgPauseGroup", MsgStartGroup],
    ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease],
  ]);
}

export class SigningAkashClient extends SigningStargateClient {
  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner
  ): Promise<SigningAkashClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    const options: SigningStargateClientOptions = {
      registry: akashRegistry(),
    };
    return new SigningAkashClient(tmClient, signer, options);
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions
  ) {
    super(tmClient, signer, options);
  }

  public async certCreateClient(
    accountAddress: string,
    value: MsgCreateCertificate,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgCreateCertificateEncodeObject = {
      typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async certRevoke(
    accountAddress: string,
    value: MsgRevokeCertificate,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgRevokeCertificateEncodeObject = {
      typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentCreate(
    accountAddress: string,
    value: MsgCreateDeployment,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgCreateDeploymentEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentClose(
    accountAddress: string,
    value: MsgCloseDeployment,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgCloseDeploymentEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentDeposit(
    accountAddress: string,
    value: MsgDepositDeployment,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgDepositDeploymentEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentUpdate(
    accountAddress: string,
    value: MsgUpdateDeployment,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgUpdateDeploymentEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentGroupClose(
    accountAddress: string,
    value: MsgCloseGroup,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgCloseGroupEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentGroupPause(
    accountAddress: string,
    value: MsgPauseGroup,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgPauseGroupEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async deploymentGroupStart(
    accountAddress: string,
    value: MsgStartGroup,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgStartGroupEncodeObject = {
      typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }

  public async marketLeaseCreate(
    accountAddress: string,
    value: MsgCreateLease,
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const message: MsgCreateLeaseEncodeObject = {
      typeUrl: "/akash.market.v1beta2.MsgCreateLease",
      value: value,
    };
    return this.signAndBroadcast(accountAddress, [message], fee, memo);
  }
}
