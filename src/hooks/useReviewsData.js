import { useState, useEffect } from "react";
import { reviewService } from "../services/reviewService";

export function useReviewsData() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    reviewService.getReviews()
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { reviews, loading, error, setReviews };
}
