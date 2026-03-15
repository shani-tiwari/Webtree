import React, { createContext, useContext, useState } from "react";

const ReviewContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
};

// Initial dummy data for visual feedback before users add their own
// Static array of reviews
// eslint-disable-next-line react-refresh/only-export-components
export const initialReviews = [
  {
    id: 1,
    name: "Shani Tiwari",
    xProfile: "@ShaniDevelops",
    gender: "male",
    text: "Webtree has completely transformed how I organize my development resources. It's incredibly fast and the UI is just stunning!",
    date: "2026-03-15T12:00:00.000Z"
  },
];

export const ReviewProvider = ({ children }) => {
  // Using the static array directly. New reviews added locally here will reset on refresh.
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (review) => {
    setReviews((prevReviews) => {
      const newReview = {
        ...review,
        id: Date.now(),
        date: new Date().toISOString(),
      };
      
      const newReviewsList = [newReview, ...prevReviews];
      // Keep only the latest 70 reviews in memory
      if (newReviewsList.length > 70) {
        return newReviewsList.slice(0, 70);
      }
      return newReviewsList;
    });
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
