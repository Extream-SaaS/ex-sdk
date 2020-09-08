export declare type Options = {
    auth: string;
    gateway: string;
    apiKey: string;
};
export declare type Headers = {
    'Content-Type': string;
    Authorization: string;
};
export declare type ExtreamUser = {
    username: string;
    'user_type': string;
};
export declare type AuthenticationParams = {
    username: string;
    password: string;
    'grant_type': string;
};
export declare type AuthenticationResponse = {
    accessToken: string;
    accessTokenExpiresAt: string;
    id: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
};
export declare class ExtreamClient {
    options: Options;
    io: any;
    private headers;
    constructor(options: Options);
    /**
     * Given a username and password, will authenticate the user against the ExtreamClient
     *
     * @param { string } username
     * @param { string } password
     * @returns { Promise<AuthenticationResponse> }
     *
     */
    authenticate(username: string, password: string): Promise<AuthenticationResponse>;
    /**
     * Given a username and password, will fetch the user
     *
     * @param { string } username
     * @returns { Promise<ExtreamUser> }
     *
     */
    fetchUser(username: string): Promise<ExtreamUser>;
}
