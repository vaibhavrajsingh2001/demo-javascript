import { Component } from "react";

type Props = {
  title: string,
  isHero: boolean
}

class Hello extends Component<Props> {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.isTitleAvailable = this.title ? true : false;
    this.isHero = props.isHero ? props.isHero : false;
  }
  render() {
    return (
      <h1 class="no-unknown-property" font-size="24">
        {this.isTitleAvailable ? this.title : `Welcome to DeepSource`}
      </h1>
    );
  }
}



export default Hello;
