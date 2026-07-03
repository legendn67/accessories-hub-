import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product, urlFor } from "../sanity/client";

export function ProductCard({ product }: { product: Product }) {
  const imageUrl = product.images?.[0] ? urlFor(product.images[0]).width(400).url() : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400";
  const displayPrice = product.salePrice ? product.salePrice : product.price;
  const originalPrice = product.salePrice ? product.price : null;

  return (
    <Link to={`/product/${product.slug?.current || product._id}`} className="group block h-full">
      <div className="bg-white rounded-xl p-4 flex flex-col h-full shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
          <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
            <Heart size={18} />
          </button>
        </div>
        <div className="flex flex-col flex-grow text-left">
          <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
          
          <div className="flex items-center gap-1 mb-2 text-xs text-gray-500">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-700">4.5</span>
            <span>(128)</span>
          </div>

          <div className="mb-4">
            <span className="font-bold text-lg text-gray-900">${displayPrice.toFixed(2)}</span>
            {originalPrice && (
              <span className="line-through text-gray-400 text-sm ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button 
            className="mt-auto w-full flex items-center justify-center gap-2 bg-[#6B804D] text-white py-2.5 rounded-md hover:bg-[#5b6e41] transition-colors text-sm font-medium"
            onClick={(e) => {
              e.preventDefault();
              if (product.whatsappNumber) {
                window.open(`https://wa.me/${product.whatsappNumber}?text=Hi, I'm interested in ${product.name}`, '_blank');
              }
            }}
          >
            <ShoppingCart size={16} />
            {product.whatsappNumber ? "Order on WhatsApp" : "Add to Cart"}
          </button>
        </div>
      </div>
    </Link>
  );
}

export function SimpleProductCard({ product }: { product: Product }) {
  return <ProductCard product={product} />;
}
