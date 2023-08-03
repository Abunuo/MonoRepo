interface FormatJSONResponse {
    code: number;
    data: any;
    msg: string;
}
export declare const formatJSONResponse: (response?: Partial<FormatJSONResponse>) => {
    code: number;
    data: {};
    msg: string;
} & Partial<FormatJSONResponse>;
export {};
