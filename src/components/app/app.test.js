import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const OFFERS_FOUND = 312;
const OFFERS = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    price: 120,
    rating: 4,
    bedrooms: 3,
    guests: {
      adults: 5,
      kids: 2,
    },
    inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel`, `TV`, `Fridge`],
    type: `Apartment`,
    src: `img/apartment-01.jpg`,
    isInBookmark: false,
    isPremium: true,
    photos: [],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  }, {
    id: 2,
    title: `Wood and stone place`,
    description: [],
    price: 80,
    rating: 4,
    bedrooms: 3,
    guests: {
      adults: 5,
      kids: 2,
    },
    inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel`, `TV`, `Fridge`],
    type: `Private room`,
    src: `img/room.jpg`,
    isInBookmark: true,
    isPremium: false,
    photos: [],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  }, {
    id: 3,
    title: `Canal View Prinsengracht`,
    description: [],
    price: 132,
    rating: 4,
    bedrooms: 3,
    guests: {
      adults: 5,
      kids: 2,
    },
    inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel`, `TV`, `Fridge`],
    type: `Apartment`,
    src: `img/apartment-02.jpg`,
    isInBookmark: false,
    isPremium: false,
    photos: [],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  }, {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    description: [],
    price: 180,
    rating: 5,
    bedrooms: 3,
    guests: {
      adults: 5,
      kids: 2,
    },
    inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel`, `TV`, `Fridge`],
    type: `Apartment`,
    src: `img/apartment-03.jpg`,
    isInBookmark: false,
    isPremium: false,
    photos: [],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  }
];

it(`Should render App screen correctly`, () => {
  const tree = renderer
    .create(
        <App
          offersFound={OFFERS_FOUND}
          offers={OFFERS}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
