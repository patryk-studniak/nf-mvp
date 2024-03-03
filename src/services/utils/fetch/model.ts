import { FetchOptions } from './universalFetch';

export enum HttpMethod {
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    GET = 'GET',
}

export const HttpStatus = {
    Ok: 200,
    MultiStatus: 207,
    MultipleChoices: 300,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    Conflict: 409,
    UnprocessableEntity: 422,
    InternalServerError: 500,
};

export interface ErrorBody {
    method: string;
    requestBody: string;
    responseBody: string;
    responseHeaders: string;
    message: string;
}

interface APIErrorParams {
    error: Partial<ErrorBody>;
    url: string;
    status?: number;
    options?: FetchOptions;
}

interface APIErrorOptions extends Omit<FetchOptions, 'headers'> {
    headers?: Headers;
}

export class APIError extends Error implements ErrorBody {
    status?: number;
    path: string;
    method: string;
    requestBody: string;
    responseBody: string;
    responseHeaders: string;
    options?: APIErrorOptions;

    constructor({ url, status, error, options }: APIErrorParams) {
        const responseWithDefaults = {
            path: url,
            status,
            message: error?.message,
            ...error,
        };

        super(responseWithDefaults.message ?? `Request failed with status code ${responseWithDefaults.status}`);

        this.options = this.getOptions(options);

        this.status = responseWithDefaults.status;
        this.path = responseWithDefaults.path;
        this.method = this.options?.method ?? HttpMethod.GET;
        this.requestBody = JSON.stringify(this.options?.data ?? {});
        this.responseBody = JSON.stringify(error?.responseBody ?? {});
        this.responseHeaders = JSON.stringify(error?.responseHeaders ?? {});
    }

    private readonly getOptions = (options?: FetchOptions) => {
        const headers = new Headers(options?.headers ?? {});
        headers.delete('Authorization');
        headers.delete('Cookie');

        return { ...options, headers };
    };
}
