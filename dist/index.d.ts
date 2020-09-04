export declare type options = {
    auth: string;
    gateway: string;
    apiKey: string;
};
export declare type headers = {
    'Content-Type': string;
    Authorization: string;
};
export declare class ExtremeClient {
    options: options;
    io: any;
    private headers;
    constructor(options: options);
    /**
     * Given a username and password, will authenticate the user against the ExtremeClient
     *
     * @param { string } username
     * @param { string } password
     * @returns { Promise<any> }
     *
     */
    auth(username: string, password: string): Promise<any>;
}
