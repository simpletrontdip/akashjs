import { QueryClientImpl, QueryOrdersResponse } from "../codec/akash/market/v1beta2/query";
export interface QueryMarketOrderListParams {
    owner?: string;
    dseq?: number;
    gseq?: number;
    oseq?: number;
    state?: "open" | "matched" | "closed";
}
export declare class QueryMarketOrderList {
    private readonly queryService;
    constructor(queryService: QueryClientImpl);
    params(params?: QueryMarketOrderListParams): Promise<QueryOrdersResponse>;
}
