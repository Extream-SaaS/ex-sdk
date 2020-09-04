"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtremeClient = void 0;
// @ts-ignore
const socket_io_client_1 = __importDefault(require("socket.io-client"));
class ExtremeClient {
    constructor(options) {
        this.options = options;
        this.io = socket_io_client_1.default;
        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${this.options.apiKey}`
        };
    }
    /**
     * Given a username and password, will authenticate the user against the ExtremeClient
     *
     * @param { string } username
     * @param { string } password
     * @returns { Promise<any> }
     *
     */
    auth(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = yield fetch(`${this.options.auth}/auth/login?username=${username}`, {
                    method: 'GET',
                    headers: this.headers
                });
                const resp = yield auth.json();
                return resp;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.ExtremeClient = ExtremeClient;
