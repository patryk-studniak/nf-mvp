import { APIError, HttpMethod, ErrorBody } from './model';
import { parseResponse } from './responseParser';
import { prepareBody } from './prepareBody';
import { getRequestUrl } from './getRequestUrl';

export interface FetchOptions {
    data?: object;
    headers?: Record<string, string>;
    method?: HttpMethod;
}

export async function universalFetch<Response>(path: string, options: FetchOptions = {}): Promise<Response> {
    const { headers, method, data } = options;

    const url = getRequestUrl({
        host: process.env.PROXY_TARGET,
        path,
    });

    try {
        const [contentType, body] = prepareBody(data);
        const requestHeaders = new Headers(headers);

        if (contentType) {
            requestHeaders.set('Content-Type', contentType);
        }

        const response = await globalThis.fetch(url, {
            method,
            headers: requestHeaders,
            body,
        });

        const responseBody = await parseResponse(response);

        return responseBody as Response;
    } catch (error) {
        throw new APIError({
            error: error as ErrorBody,
            url: url,
            options,
        });
    }
}
