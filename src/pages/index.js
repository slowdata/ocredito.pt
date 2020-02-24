import React, { Component } from "react";

import Header from "../components/header";

//import Container from "../components/container";

// const contact = {
//   title: "OCredito.pt",
//   subtitle:
//     "(Brevemente...) O seu novo canto para informação, dúvidas e ajuda.",
//   email: "ocredito.pt@gmail.com",
//   phone: "+351-937 384 062"
// };

class indexPage extends Component {
  state = {
    menuOpen: false
  };

  handleClick = () => {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <>
        <Header handleMenu={this.handleClick} menuOpen={menuOpen} />
      </>
    );
  }
}

export default indexPage;
