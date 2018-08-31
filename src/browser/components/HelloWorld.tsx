import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IHelloService } from '../../common/interfaces/IHelloService';
// import style from './HelloWorld.scss';

interface IHelloWorldProps {
  backendService: any;
  options: { initialText: string }
}
interface IHelloWorldState {
  text: string;
  helloService?: any;
  error?: any;
}

export class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
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
    this.state = { text: props.options.initialText };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  public componentDidMount() {
    this.props.backendService.getService('HelloService')
      .then((helloService: IHelloService) => this.setState({ helloService }))
      .catch((error: any) => this.setState({ error }));
  }

  public onButtonClick() {
    try {
      this.setState({ text: this.state.helloService.sayHello('Martin') });
    } catch (error) {
      this.setState({ text: error });
    }
  }

  public render() {
    if (this.state.error) {
      return <div className="error">Error: {this.state.error}</div>;
    }

    if (!this.state.helloService) {
      return <div className="loading">Loading HelloService</div>;
    }

    return (
      <section className="HelloWorld">
        <div>
          <FontAwesome.FontAwesomeIcon icon={SvgIcons.faThumbsUp} size="2x" />
          {this.state.text}
        </div>
        <button onClick={this.onButtonClick}>Say Hello from Server</button>
      </section>
    );
  }
}
