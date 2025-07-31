import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ProductProps = {
  brand: string;
  category: string;
  color: string;
  description: string;
  discount: number;
  id: number;
  image: string;
  model: string;
  price: number;
  title: string;
};
const fallbackImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductCard: React.FC<ProductProps> = ({
  brand,
  category,
  color,
  description,
  discount,
  image,
  model,
  price,
  title,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`rounded shadow p-4 flex flex-col transition-all duration-300 product-card`}>
      <img
        src={image}
        alt={title}
        className="h-32 mx-auto mb-2 object-contain rounded"
        onError={e => {
          (e.currentTarget as HTMLImageElement).src = fallbackImage;
        }}
      />
      <h2 className="font-bold text-lg mb-1">{title}</h2>
      <p className="text-sm mb-1">{brand} • {model}</p>
      <p className="text-xs mb-1">{category} • {color}</p>
      <p className="text-xs mb-2">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-blue-700 text-xl">₹{price}</span>
        {discount > 0 && (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
            {discount}% OFF
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;