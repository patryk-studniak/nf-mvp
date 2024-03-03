export const prepareBody = (data: unknown): [string | undefined, FormData | string | undefined] => {
    if (data === undefined) {
        return [undefined, undefined];
    }

    if (data instanceof FormData) {
        return [undefined, data];
    }

    if (typeof data === 'object') {
        return ['application/json', JSON.stringify(data)];
    }

    throw new Error(`Unsupported body type: [${typeof data}] ${data}`);
};
