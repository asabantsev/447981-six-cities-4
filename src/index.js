import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PLACES_FOUND = 312;
const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const init = () => {
  ReactDOM.render(
      <App
        placesFound={PLACES_FOUND}
        places={PLACES}
      />,
      document.querySelector(`#root`)
  );
};

init();
