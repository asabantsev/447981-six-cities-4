import React from "react";
import OfferList from "../offer-list/offer-list.jsx";

export const OfferListNear = (props) => {
  const className = `near`;

  return (
    <OfferList className={className} {...props} />
  );
};

OfferListNear.propTypes = {

};
