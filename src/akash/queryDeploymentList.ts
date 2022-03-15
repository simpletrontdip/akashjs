import Long from "long";
import {
  QueryClientImpl,
  QueryDeploymentsRequest,
  QueryDeploymentsResponse
} from "../codec/akash/deployment/v1beta2/query";

export interface QueryDeploymentListParams {
  countTotal?: boolean,
  dseq?: number,
  limit?: number,
  offset?: number,
  owner?: string,
  page?: number,
  pageKey?: string,
  state?: "active" | "closed"
}

export class QueryDeploymentList {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryDeploymentListParams = {}): Promise<QueryDeploymentsResponse> {
    const request: QueryDeploymentsRequest = {};
    if (params.owner || params.dseq !== undefined || params.state) {
      request.filters = {
        owner: params.owner || "",
        dseq: params.dseq !== undefined ? new Long(params.dseq) : Long.UZERO,
        state: params.state || ""
      };
    }
    // TODO: support pagination, see createPagination()
    // in https://github.com/cosmos/cosmjs/blob/main/packages/stargate/src/queries/utils.ts
    return this.queryService.Deployments(request);
  }
}