const REVIEWS_URL = import.meta.env.VITE_PRIVATE_WEBSITE_REVIEWS_URL;

export const reviewService = {
  async getReviews() {
    if (!REVIEWS_URL) {
      console.warn("Reviews URL is not defined in environment variables.");
      return [];
    }
    const res = await fetch(REVIEWS_URL);
    if (!res.ok) throw new Error("Failed to fetch reviews");
    return res.json();
  }
};
