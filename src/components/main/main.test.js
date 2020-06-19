import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const OFFERS_FOUND = 312;
const OFFERS = [
  {
    id: 1,
    description: `Beautiful &amp; luxurious apartment at great location`,
    price: 120,
    rating: 4,
    type: `Apartment`,
    src: `img/apartment-01.jpg`,
    isInBookmark: false,
    isPremium: true,
  }, {
    id: 2,
    description: `Wood and stone place`,
    price: 80,
    rating: 4,
    type: `Private room`,
    src: `img/room.jpg`,
    isInBookmark: true,
    isPremium: false,
  }, {
    id: 3,
    description: `Canal View Prinsengracht`,
    price: 132,
    rating: 4,
    type: `Apartment`,
    src: `img/apartment-02.jpg`,
    isInBookmark: false,
    isPremium: false,
  }, {
    id: 4,
    description: `Nice, cozy, warm big bed apartment`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    src: `img/apartment-03.jpg`,
    isInBookmark: false,
    isPremium: false,
  }
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          offersFound={OFFERS_FOUND}
          offers={OFFERS}
          onOfferTitleClick = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});