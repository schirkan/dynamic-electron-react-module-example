import { IComponentDefinition } from '../common/interfaces/IComponentDefinition';
import { HelloWorld } from './components/HelloWorld';

export * from './components/HelloWorld';

export const components: IComponentDefinition[] = [{
    component: HelloWorld,
    description: 'Hello World Component with HelloService',
    displayName: 'Hello World Component',
    name: 'HelloWorld',
    options: [{
        description: 'Text to display',
        displayName: 'Text',
        name: 'text',
        valueType: 'string'
    }]
}];