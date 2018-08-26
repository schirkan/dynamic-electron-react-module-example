import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import * as React from 'react';
// import style from './HelloWorld.scss';

interface IHelloWorldProps {
  text: string
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  constructor(props: IHelloWorldProps) {
    super(props);
  }

  public render() {
    return (
      <section className="HelloWorld">
        <div>
          <FontAwesome.FontAwesomeIcon icon={SvgIcons.faThumbsUp} size="2x" />
          {this.props.text}!
        </div>
      </section>
    );
  }
}
