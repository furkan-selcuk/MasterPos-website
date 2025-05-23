'use client';

import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        setProducts, 
        loading, 
        setLoading, 
        error, 
        setError 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}
