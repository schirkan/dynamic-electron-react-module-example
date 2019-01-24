import { IReactronServiceContext } from "@schirkan/reactron-interfaces";
import { IHelloService } from "src/common/interfaces/IHelloService";

export class HelloService implements IHelloService {
    constructor(private context: IReactronServiceContext) { }

    public async start(context: IReactronServiceContext): Promise<void> {
        this.context.log.debug('test debug');
        this.context.log.info('test info');
        this.context.log.warning('test warning');
        this.context.log.error('test error');
    }

    public async stop(): Promise<void> {
        // nothing here
    }

    public async sayHello(name: string): Promise<string> {
        this.context.log.debug('sayHello', name);
        return 'Hello ' + name;
    }
}