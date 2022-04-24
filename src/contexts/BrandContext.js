import { useState, createContext, useContext } from "react";

const BrandContext = createContext([]);

const BrandProvider = ({ children }) => {
  const [brandData, setBrandData] = useState([]);
  return (
    <BrandContext.Provider value={{ brandData, setBrandData }}>
      {children}
    </BrandContext.Provider>
  );
};

const useBrandData = () => useContext(BrandContext);

export { useBrandData, BrandProvider };
