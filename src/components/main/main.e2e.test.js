import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const PLACES_FOUND = 312;
const PLACES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainE2eTest`, () => {
  it(`Should place card title be pressed`, () => {
    const onPlaceTitleClick = jest.fn();

    const main = shallow(
        <Main
          placesFound={PLACES_FOUND}
          places={PLACES}
          onPlaceTitleClick = {onPlaceTitleClick}
        />
    );

    const placeTitles = main.find(`.place-card__name a`);

    placeTitles.forEach((placeTitle) => {
      onPlaceTitleClick.mockClear();
      placeTitle.simulate(`click`);
      expect(onPlaceTitleClick).toHaveBeenCalledTimes(1);
    });

  });
});
