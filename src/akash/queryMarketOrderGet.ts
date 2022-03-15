import Long from "long";
import {
  QueryClientImpl,
  QueryOrderRequest,
  QueryOrderResponse
} from "../codec/akash/market/v1beta2/query";

export interface QueryMarketOrderGetParams {
  owner: string,
  dseq: number,
  gseq: number,
  oseq: number
}

export class QueryMarketOrderGet {
  private readonly queryService: QueryClientImpl;

  constructor (queryService: QueryClientImpl) {
    this.queryService = queryService;
  }

  public async params(params: QueryMarketOrderGetParams): Promise<QueryOrderResponse> {
    const request: QueryOrderRequest = {
      id: {
        owner: params.owner,
        dseq: new Long(params.dseq),
        gseq: params.gseq,
        oseq: params.oseq
      }
    };
    return this.queryService.Order(request);
  }
}