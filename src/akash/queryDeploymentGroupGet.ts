import Long from "long";
import {
  QueryClientImpl,
  QueryGroupRequest,
  QueryGroupResponse
} from "../codec/akash/deployment/v1beta2/query";

export interface QueryDeploymentGroupGetParams {
  owner: string,
  dseq: number,
  gseq: number
}

export class QueryDeploymentGroupGet {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryDeploymentGroupGetParams): Promise<QueryGroupResponse> {
    const request: QueryGroupRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq),
        gseq: params.gseq
      }
    };
    return this.queryService.Group(request);
  }
}