import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import { IReactronComponentContext } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IHelloService } from '../../common/interfaces/IHelloService';

import style from './HelloWorld.scss';
// tslint:disable:no-string-literal

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

  constructor(props: IHelloWorldOptions) {
    super(props);
    this.state = {
      inputValue: 'Service',
      text: props.initialText
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public onButtonClick() {
    const helloService = this.context.getService<IHelloService>('HelloService');
    if (!helloService) {
      return;
    }
    try {
      this.setState({ text: helloService.sayHello(this.state.inputValue) });
    } catch (error) {
      this.setState({ error });
    }
  }

  public onChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.currentTarget.value });
  }

  public render() {
    return (
      <section className={style["HelloWorld"]}>
        <div>
          <FontAwesome.FontAwesomeIcon icon={SvgIcons.faThumbsUp} />
          <span> {this.state.text}</span>
        </div>
        <span>Say Hello&nbsp;</span><input value={this.state.inputValue} onChange={this.onChange} />
        <button onClick={this.onButtonClick}>from Service</button>
        {this.state.error && <div className="error">Error: {this.state.error}</div>}
      </section>
    );
  }
}
