import { createContext, useContext, useEffect, useState } from "react";

const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collection, setCollection] = useState(() => {
    const saved = localStorage.getItem("personalCollection");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("personalCollection", JSON.stringify(collection));
  }, [collection]);

  const addToCollection = (item) => {
    setCollection((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCollection = (id) => {
    setCollection((prev) => prev.filter((item) => item.id !== id));
  };

  const value = {
    collection,
    addToCollection,
    removeFromCollection,
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCollection() {
  return useContext(CollectionContext);
}
