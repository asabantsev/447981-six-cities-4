import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardE2eTest`, () => {
  it(`Should card hover works`, () => {
    const onCardHover = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {() => {}}
          onCardHover = {onCardHover}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);
    card.simulate(`mouseLeave`);

    expect(onCardHover).toHaveBeenCalledTimes(2);
  });

  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {onOfferTitleClick}
          onCardHover = {() => {}}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
  });
});
