import { IReactronServiceDefinition } from '@schirkan/reactron-interfaces';
import { HelloService } from './services/HelloService';

export const services: IReactronServiceDefinition[] = [{
    description: 'Service for HelloWorld Component',    
    displayName: 'HelloService',
    name: 'HelloService',
    service: HelloService
}];