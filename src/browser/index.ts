import { IReactronComponentDefinition } from '@schirkan/reactron-interfaces';
import { HelloWorld } from './components/HelloWorld';

export const components: IReactronComponentDefinition[] = [{
    component: HelloWorld,
    description: 'Hello World Component with HelloService',
    displayName: 'Hello World Component',
    name: 'HelloWorld',
    fields: [{
        description: 'Text to display',
        displayName: 'Text',
        name: 'text',
        valueType: 'string'
    }]
}];