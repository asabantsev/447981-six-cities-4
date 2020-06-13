import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PLACES_FOUND = 312;
const PLACES_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const init = () => {
  ReactDOM.render(
      <App
        placesFound={PLACES_FOUND}
        placesNames={PLACES_NAMES}
      />,
      document.querySelector(`#root`)
  );
};

init();
