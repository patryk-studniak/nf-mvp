import urlJoin from 'url-join';

interface GetRequestUrlParams {
    path: string;
    host?: string;
}

export const getRequestUrl = ({ path, host = '' }: GetRequestUrlParams) => {
    return urlJoin(host, path);
};
