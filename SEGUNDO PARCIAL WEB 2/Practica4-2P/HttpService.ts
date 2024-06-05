import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import got, { OptionsOfJSONResponseBody } from 'got';

// Define an abstract class for HTTP services
abstract class HttpService {
    abstract get(url: string, config?: any): Promise<any>;
    abstract post(url: string, data?: any, config?: any): Promise<any>;

    protected handleError(error: any): void {
        console.error('HTTP Error:', error);
        throw error;
    }
}

// Unified implementation of the HttpService
export class HttpServiceUnified extends HttpService {
    private axiosClient;

    constructor() {
        super();
        this.axiosClient = axios.create();
    }

    async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse | undefined> {
        try {
            return await this.axiosClient.get(url, config);
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse | undefined> {
        try {
            return await this.axiosClient.post(url, data, config);
        } catch (error) {
            this.handleError(error);
        }
    }
}

// Define una clase para el servicio HTTP utilizando Got
/*export class HttpServiceUnified extends HttpService {
    private client;

    constructor() {
        super();
        this.client = got;
    }

    async get(url: string, options?: OptionsOfJSONResponseBody): Promise<any> {
        try {
            return await this.client.get(url, options).json();
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(url: string, json?: any, options?: OptionsOfJSONResponseBody): Promise<any> {
        try {
            return await this.client.post(url, { ...options, json }).json();
        } catch (error) {
            this.handleError(error);
        }
    }

    private handleError(error: any): void {
        console.error('HTTP Error:', error);
        throw error;
    }
} */

export default HttpServiceUnified;

