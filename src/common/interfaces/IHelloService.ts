export interface IHelloService {
    sayHello(name: string): string;
    start(serviceLoader: any): Promise<void>;
    stop(): Promise<void>;
}