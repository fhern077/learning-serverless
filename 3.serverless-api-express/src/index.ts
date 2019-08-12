import slsHttp from "serverless-http";
import app from "./app";

// wrap express with in the serverless http context
export const handler: any = slsHttp(app());
