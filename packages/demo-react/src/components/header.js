import { Component } from "react";

class Header extends Component {
  render() {
    <div class={this.props.class_name}>
      Header Component is {this.props.title}
    </div>;
  }
}

Header.proptypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
