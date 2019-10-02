import React from "react";
import { observer } from "mobx-react";
import store from "~/store";

import Header from "./peaces/Header";
import Cards from "./peaces/Cards";
import Footer from "./peaces/Footer";

@observer
class Games extends React.Component {
  render() {
    store.getGameCards(this.props.match.params.slug);

    return (
      <>
        <Header />
        <Cards />
        <Footer />
      </>
    );
  }
}

export default Games;
