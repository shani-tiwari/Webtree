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

  const normalize = (str) => {
    if (!str) return "";
    return str.trim().split(" ").join("").toLowerCase();
  };

  const addToCollection = (item) => {
    setCollection((prev) => {
      const newItemName = normalize(item.name || item.title);
      if (prev.some((i) => normalize(i.name || i.title) === newItemName))
        return prev;
      return [...prev, item];
    });
  };

  const removeFromCollection = (nameIdentifier) => {
    const targetName = normalize(nameIdentifier);
    setCollection((prev) =>
      prev.filter((item) => normalize(item.name || item.title) !== targetName),
    );
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
