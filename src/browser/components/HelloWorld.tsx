import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IHelloService } from '../../common/interfaces/IHelloService';
// import style from './HelloWorld.scss';

interface IHelloWorldProps {
  options: { initialText: string };
  getService(serviceName: string, moduleName?: string): Promise<any>;
}
interface IHelloWorldState {
  text: string;
  helloService?: any;
  error?: any;
  inputValue: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      inputValue: 'Service',
      text: props.options.initialText
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    this.props.getService('HelloService')
      .then((helloService: IHelloService) => this.setState({ helloService }))
      .catch((error: any) => this.setState({ error }));
  }

  public onButtonClick() {
    try {
      this.setState({ text: this.state.helloService.sayHello(this.state.inputValue) });
    } catch (error) {
      this.setState({ error });
    }
  }

  public onChange(e: React.FormEvent<HTMLInputElement>){
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
        <button disabled={!this.state.helloService} onClick={this.onButtonClick}>from Service</button>
        {this.state.error && <div className="error">Error: {this.state.error}</div>}
      </section>
    );
  }
}
