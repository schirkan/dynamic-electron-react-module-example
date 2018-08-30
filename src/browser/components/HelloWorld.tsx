import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IHelloService } from '../../common/interfaces/IHelloService';
// import style from './HelloWorld.scss';

interface IHelloWorldProps {
  backendService: any;
  options: { text: string }
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public static definition: {
    name: 'HelloWorld';
    displayName: 'Hello World Component';
    description: 'Hello World Component with HelloService';
    options: [{
      name: 'text';
      displayName: 'Text';
      description: 'Text to display';
      valueType: 'string';
    }];
  };

  constructor(props: IHelloWorldProps) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  public onButtonClick() {
    try {
      const helloService = this.props.backendService.serviceManager.get('HelloService', 'dynamic-electron-react-module-example') as IHelloService;
      this.setState({ text: helloService.sayHello('Martin') });
    } catch (error) {
      console.log(error);
    }
  }

  public render() {
    return (
      <section className="HelloWorld">
        <div>
          <FontAwesome.FontAwesomeIcon icon={SvgIcons.faThumbsUp} size="2x" />
          {this.props.options.text}!
        </div>
        <button onClick={this.onButtonClick}>Say Hello from Server</button>
      </section>
    );
  }
}
