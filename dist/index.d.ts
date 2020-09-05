export declare type options = {
    auth: string;
    gateway: string;
    apiKey: string;
};
export declare type headers = {
    'Content-Type': string;
    Authorization: string;
};
export declare type ExtreamUser = {
    username: string;
    'user_type': string;
};
export declare class ExtreamClient {
    options: options;
    io: any;
    private headers;
    constructor(options: options);
    /**
     * Given a username and password, will authenticate the user against the ExtreamClient
     *
     * @param { string } username
     * @param { string } password
     * @returns { Promise<ExtreamUser> }
     *
     */
    auth(username: string, password: string): Promise<ExtreamUser>;
}
