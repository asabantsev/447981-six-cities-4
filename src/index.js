import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    placesFound: 312,
  };

  ReactDOM.render(
      <App placesFound={settings.placesFound} />,
      document.querySelector(`#root`)
  );
};

init();
