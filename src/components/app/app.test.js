import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const PLACES_FOUND = 312;
const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Should render App screen correctly`, () => {
  const tree = renderer
    .create(
        <App
          placesFound={PLACES_FOUND}
          places={PLACES}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
