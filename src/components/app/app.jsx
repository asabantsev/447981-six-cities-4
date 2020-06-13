import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  const {placesFound, placesNames} = props;

  return (
    <Main placesFound={placesFound} placesNames={placesNames} />
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
  placesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
