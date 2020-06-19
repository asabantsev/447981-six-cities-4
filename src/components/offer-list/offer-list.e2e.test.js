import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferList from "./offer-list.jsx";

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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferListE2eTest`, () => {
  it(`_handleCardHover() should change offer list state`, () => {

    const offerList = shallow(
        <OfferList
          offers = {OFFERS}
          onCardHover = {() => {}}
          onOfferTitleClick = {() => {}}
        />
    );
    OFFERS.forEach((offer) => {
      const id = offer.id;
      offerList.instance()._handleCardHover(id);
      expect(offerList.state(`idCard`)).toEqual(id);
    });
  });
});
