import { IHelloService } from "../../common/interfaces/IHelloService";

export class HelloService implements IHelloService {
    public async start(serviceLoader: any): Promise<void> {
        console.log('HelloService.start()');
    }
    public async stop(): Promise<void> {
        console.log('HelloService.stop()');
    }

    public sayHello(name: string): string {
        return 'Hello ' + name + ' from HelloService';
    }
}