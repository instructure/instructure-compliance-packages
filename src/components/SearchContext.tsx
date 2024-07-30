import { createContext, useContext, useState } from "react";
import type React from "react";
import type { ReactNode } from "react";

// Create the context with a default value
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Define the props interface for the provider
interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    //@TODO: use Strings
    throw new Error("useSearchContext must be used within a SearchProvider.");
  }
  return context;
};
