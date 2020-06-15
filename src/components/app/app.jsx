import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const placeTitleHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {placesFound, places} = props;

  return (
    <Main placesFound={placesFound} places={places} onPlaceTitleClick={placeTitleHandler} />
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
