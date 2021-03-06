export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getUnicValues = (values) => {
  return values.filter((value, i) => values.indexOf(value) === i);
};

export const getOffersByCity = (city, offers) => {
  return offers[city];
};

export const getCitiesFromOffers = (offers) => {
  return Object.keys(offers);
};
