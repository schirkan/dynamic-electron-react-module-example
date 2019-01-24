import { IReactronService } from '@schirkan/reactron-interfaces';

export interface IHelloService extends IReactronService {
    sayHello(name: string): Promise<string>;
}