import { IServiceDefinition } from '../common/interfaces/IServiceDefinition';
import { HelloService } from './services/HelloService';

export const services: IServiceDefinition[] = [{
    description: 'Service for HelloWorld Component',    
    displayName: 'HelloService',
    name: 'HelloService',
    service: HelloService
}];