import { HttpStatus } from './model';

const isSuccessResponse = (status: number): boolean => {
    const min = HttpStatus.Ok;
    const max = HttpStatus.MultipleChoices;

    return status >= min && status < max;
};

const verifyResponseStatus = <ResponseType>(responseStatus: number, response: ResponseType): ResponseType => {
    if (isSuccessResponse(responseStatus)) {
        return response;
    }

    throw { status: responseStatus, ...response };
};

const isJsonResponse = (headers: Headers) => {
    const contentType = headers.get('Content-Type');

    return contentType?.includes('application/json');
};

export const parseResponse = async <ResponseType>(response: Response): Promise<ResponseType> => {
    if (isJsonResponse(response.headers)) {
        return verifyResponseStatus(response.status, await response.json()) as ResponseType;
    }

    return verifyResponseStatus(response.status, (await response.text()) || null) as ResponseType;
};
