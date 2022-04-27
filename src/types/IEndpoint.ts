import { EndpointCallback, HTTPMethods } from "api-tools-ts";

export interface IEndpoint {
    endpoint: string;
    method: HTTPMethods;
    callback: EndpointCallback
}