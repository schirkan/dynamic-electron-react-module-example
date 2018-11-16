import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import { IReactronComponentContext } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IHelloService } from '../../common/interfaces/IHelloService';

// import style from './HelloWorld.scss';

interface IHelloWorldOptions {
  initialText: string;
}

interface IHelloWorldState {
  text: string;
  error?: any;
  inputValue: string;
}

export class HelloWorld extends React.Component<IHelloWorldOptions, IHelloWorldState> {
  public context: IReactronComponentContext;
  private helloService?: IHelloService;

  constructor(props: IHelloWorldOptions) {
    super(props);
    this.state = {
      inputValue: 'Service',
      text: props.initialText
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    this.helloService = this.context.getService<IHelloService>('HelloService');
  }

  public onButtonClick() {
    if (!this.helloService) {
      return;
    }
    try {
      this.setState({ text: this.helloService.sayHello(this.state.inputValue) });
    } catch (error) {
      this.setState({ error });
    }
  }

  public onChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.currentTarget.value });
  }

  public render() {
    return (
      <section className="HelloWorld">
        <div>
          <FontAwesome.FontAwesomeIcon icon={SvgIcons.faThumbsUp} />
          <span>{this.state.text}</span>
        </div>
        <span>Say Hello&nbsp;</span><input value={this.state.inputValue} onChange={this.onChange} />
        <button disabled={!this.helloService} onClick={this.onButtonClick}>from Service</button>
        {this.state.error && <div className="error">Error: {this.state.error}</div>}
      </section>
    );
  }
}
