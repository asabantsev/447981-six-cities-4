import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferListMain} from "./offer-list-main.jsx";

const OFFERS = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    price: 120,
    rating: 4,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: true,
  },
  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isInBookmark: true,
    isPremium: false,
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    rating: 4,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    rating: 4,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: false,
  },
];

const CLASSNAME = `cities`;


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferListMain`, () => {
  it(`className should take current places in the children component`, () => {
    const offerListMain = mount(
        <OfferListMain
          offers = {OFFERS}
          onOfferTitleClick = {() => {}}
        />
    );
    const elements = offerListMain.find(`.${CLASSNAME}`);
    expect(elements.length).not.toBe(0);
  });
});
