import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const offerTitleHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {offersFound, offers} = props;

  return (
    <Main offersFound={offersFound} offers={offers} onOfferTitleClick={offerTitleHandler} />
  );
};

App.propTypes = {
  offersFound: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
};

export default App;
