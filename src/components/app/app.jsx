import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferProperty from "../offer-property/offer-property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: -1
    };
    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  _renderOfferList() {
    const {offersFound, offers} = this.props;
    const {id} = this.state;
    const offerIndex = offers.findIndex((offer) => offer.id === id);

    if (id > -1) {
      return (
        <OfferProperty
          offer = {offers[offerIndex]}/>
      );
    }

    return (
      <Main
        offersFound={offersFound}
        offers={offers}
        onOfferTitleClick={this._handleOfferTitleClick}
      />
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOfferList()}
          </Route>
          <Route exact path="/dev-offer-property">
            <OfferProperty offer = {offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _handleOfferTitleClick(offerId) {
    this.setState({
      id: offerId,
    });
  }
}

App.propTypes = {
  offersFound: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.array.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.object.isRequired,
        inside: PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        photos: PropTypes.array.isRequired,
        host:
          PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isSuper: PropTypes.bool.isRequired
          }).isRequired,
      })
  ).isRequired,
};

export default App;
