import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-32">
    <svg className="animate-spin h-8 w-8 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
    </svg>
    <span className="text-lg font-semibold">Loading products...</span>
  </div>
);

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to ThemeApp</h1>
      <p className="mb-4">Switch themes using the dropdown above!</p>
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700">
        Sample Button
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto" style={{ maxHeight: "70vh" , scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none"}}>
          {Array.isArray(products) && products?.map(product => (
             <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;