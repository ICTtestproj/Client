export interface GetMyNameParams {
  accessToken: string;
}

export interface GetMyNamePayload {
  result: string | boolean
}

export interface GetMyScrapParams {
  accessToken: string;
}

export interface GetMyScrapPayload {
  result: { answer: string; question: string; id: string; }[];
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

export interface GetOftenAskedPayload {
  result: { answer: string; question: string }[];
}

export interface DeleteScrapParams {
  accessToken: string;
  id: string;
}

export interface DeleteScrapPayload {
  result: boolean;
}