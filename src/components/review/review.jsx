import React from "react";
import PropTypes from "prop-types";

const Months = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`
};

const MAX_STAR_COUNT = 5;

const createDateFormatForReview = (date) => {
  const newDate = new Date(date);
  const month = Months[newDate.getMonth() + 1];
  const currentDate = newDate.getUTCDate();

  return `${month} ${currentDate}, ${newDate.getUTCFullYear()}`;
};

const Review = (props) => {
  const {review} = props;
  const {user, rating, text, date} = review;
  const ratingStarPercent = (Math.round(rating) / MAX_STAR_COUNT * 100) + `%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingStarPercent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{createDateFormatForReview(date)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
};

export default Review;
