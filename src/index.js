import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const OFFERS_FOUND = 312;

const init = () => {
  ReactDOM.render(
      <App
        offersFound={OFFERS_FOUND}
        offers={offers}
      />,
      document.querySelector(`#root`)
  );
};

init();
