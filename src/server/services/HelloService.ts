import { IReactronServiceContext } from "@schirkan/reactron-interfaces";
import { IHelloService } from "src/common/interfaces/IHelloService";

export class HelloService implements IHelloService {
    public async start(context: IReactronServiceContext): Promise<void> {
        console.log('HelloService.start()');
    }

    public async stop(): Promise<void> {
        console.log('HelloService.stop()');
    }

    public sayHello(name: string): string {
        return 'Hello ' + name;
    }
}