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

const CLASSNAME = `near`;

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
          className = {CLASSNAME}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);
    card.simulate(`mouseLeave`);

    expect(onCardHover).toHaveBeenCalledTimes(2);
  });

  it(`Should cardHoverHandler works correctly`, () => {
    const onCardHover = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {() => {}}
          onCardHover = {onCardHover}
          className = {CLASSNAME}
        />
    );

    const card = offerCard.find(`.place-card`);

    card.simulate(`mouseEnter`);
    expect(onCardHover.mock.calls[0][0]).toBe(OFFER.id);
  });

  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {OFFER}
          onOfferTitleClick = {onOfferTitleClick}
          onCardHover = {() => {}}
          className = {CLASSNAME}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick.mock.calls[0][0]).toBe(OFFER.id);
  });
});
