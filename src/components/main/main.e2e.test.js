import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const OFFERS_FOUND = 312;
const OFFERS = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    rating: 4,
    type: `Apartment`,
    src: `img/apartment-01.jpg`,
    isInBookmark: false,
    isPremium: true,
  }, {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    rating: 4,
    type: `Private room`,
    src: `img/room.jpg`,
    isInBookmark: true,
    isPremium: false,
  }, {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    rating: 4,
    type: `Apartment`,
    src: `img/apartment-02.jpg`,
    isInBookmark: false,
    isPremium: false,
  }, {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    src: `img/apartment-03.jpg`,
    isInBookmark: false,
    isPremium: false,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainE2eTest`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const main = shallow(
        <Main
          offersFound={OFFERS_FOUND}
          offers={OFFERS}
          onOfferTitleClick = {onOfferTitleClick}
        />
    );

    const offerTitles = main.find(`.place-card__name a`);

    offerTitles.forEach((offerTitle) => {
      offerTitle.simulate(`click`);
      expect(onOfferTitleClick).toHaveBeenCalledTimes(offerTitle.length);
    });

  });
});
