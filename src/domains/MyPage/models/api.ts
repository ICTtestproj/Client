export interface GetMyScrapParams {
  accessToken: string;
}

export interface GetMyScrapPayload {
  result: { answer: string; question: string }[];
}

export interface GetLastAskParams {
  accessToken: string;
}

export interface GetLastAskPayload {
  result: { answer: string; question: string }[];
}

export interface GetOftenAskedParams {
  accessToken: string;
}

export interface GetOftenAskedPaylaod {
  result: { answer: string; question: string }[];
}
