import React, { createContext, useContext, useState, useEffect } from "react";

const ReviewContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
};

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial reviews from the static file defined in .env
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(import.meta.env.VITE_PRIVATE_WEBSITE_REVIEWS_URL);
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Failed to load initial reviews:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchReviews();
  }, []);

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
    <ReviewContext.Provider value={{ reviews, addReview, loading }}>
      {children}
    </ReviewContext.Provider>
  );
};
