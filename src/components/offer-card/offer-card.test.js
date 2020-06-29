import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const OFFER = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  rating: 4,
  type: `Apartment`,
  src: `img/apartment-01.jpg`,
  isInBookmark: false,
  isPremium: true,
};

describe(`OfferSnapTest`, () => {
  it(`OfferCard should render offer card component`, () => {
    const tree = renderer
      .create(<OfferCard
        offer = {OFFER}
        onOfferTitleClick = {() => {}}
        onCardHover = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
