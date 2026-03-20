const COLLECTION_URL = import.meta.env.VITE_PRIVATE_WEBSITE_COLLECTION_URL;

export const collectionService = {
  async getCollection() {
    if (!COLLECTION_URL) {
      console.warn("Collection URL is not defined in environment variables.");
      return {};
    }
    const res = await fetch(COLLECTION_URL);
    if (!res.ok) throw new Error("Failed to fetch collection");
    return res.json();
  }
};
