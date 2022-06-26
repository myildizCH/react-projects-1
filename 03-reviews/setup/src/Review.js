import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInfo,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (idx) => {
    if (idx > people.length - 1) {
      // if index is greater than total index number of people
      return 0;
    }

    if (idx < 0) {
      // if index is less than 0
      return people.length - 1;
    }

    return idx; // if index is within the boundaries
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (index === randomNumber) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
