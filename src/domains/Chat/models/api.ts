export interface GetChattingParams {
    question: string;
}

export interface GetChattingPayload {
    answer: string;
}

export interface RegisterScrapParams {
    question: string;
    answer: string;
}

export interface RegisterScrapPayload {
    result: boolean;
}