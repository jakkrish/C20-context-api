import { createContext, useContext } from "react";

// Define the type of the context value
type SimpleContextType = number;

// Provide a default value (useful for avoiding undefined issues)
const SimpleContext = createContext<SimpleContextType | undefined>(undefined);

// Custom hook to use context (avoids calling `useContext` directly)
export const useSimpleContext = () => {
  const context = useContext(SimpleContext);
  if (context === undefined) {
    throw new Error("useSimpleContext must be used within a SimpleProvider");
  }
  return context;
};

// Context Provider Component
export const SimpleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SimpleContext.Provider value={10}>{children}</SimpleContext.Provider>;
};

export default SimpleContext;
