import { IHelloService } from "../../common/interfaces/IHelloService";

export class HelloService implements IHelloService {
    public start(): void {
        console.log('HelloService.start()');
    }

    public stop(): void {
        console.log('HelloService.stop()');
    }

    public sayHello(name: string): string {
        return 'Hello ' + name + ' from HelloService';
    }
}