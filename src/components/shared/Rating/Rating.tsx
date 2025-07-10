"use client";
import { useState } from "react";

// Deno flag to use window object

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value + 1);
  };
  const handleMouseEnter = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const isFilled = (hoverRating || rating) > index;
        return (
          <span
            key={index}
            className={`text-3xl cursor-pointer transition-colors ${
              isFilled ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
