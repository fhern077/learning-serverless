import HttpCodes from "http-status-codes";

export default class TodoError extends Error {
  public httpCode: number;
  constructor(message: string) {
    super(message);
    this.httpCode = HttpCodes.INTERNAL_SERVER_ERROR;
  }
}

export class ReqParamsMissing extends Error {
  public httpCode: number;
  constructor(reqParams: string[]) {
    super(`Missing the following request parameters for a valid request ${reqParams}`);
    this.httpCode = HttpCodes.INTERNAL_SERVER_ERROR;
  }
}
