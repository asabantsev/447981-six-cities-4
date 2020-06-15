import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const PLACES_FOUND = 312;
const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          placesFound={PLACES_FOUND}
          places={PLACES}
          onPlaceTitleClick = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
