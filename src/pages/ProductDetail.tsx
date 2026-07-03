import { MessageCircle, CheckCircle2, Truck, Zap, ShoppingCart } from "lucide-react";
import { Marquee } from "../components/Marquee";
import { Link, useParams } from "react-router-dom";
import { useSanityProduct, urlFor } from "../sanity/client";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useSanityProduct(id);

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center p-8 text-center pt-20">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h2>
        <p className="text-gray-700 max-w-md mb-6">
          Failed to fetch data from Sanity CMS. If you just set this up, you might need to add this URL to your CORS origins in Sanity.
        </p>
        <Link to="/studio" className="bg-[#6B804D] text-white px-6 py-3 rounded-md hover:bg-[#5b6e41] transition-colors">
          Open Sanity Studio to Fix
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#6B804D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center text-gray-800">
        <h1 className="text-3xl font-bold mb-4 font-display">Product not found</h1>
        <Link to="/shop" className="text-[#6B804D] hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const imageUrl = product.images?.[0] ? urlFor(product.images[0]).width(800).url() : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800";
  const displayPrice = product.salePrice ? product.salePrice : product.price;

  return (
    <div className="animate-in fade-in duration-700 bg-surface pt-20">
      {/* Product Detail Section */}
      <section className="min-h-[calc(100vh-73px)] flex flex-col md:flex-row items-stretch">
        {/* Left: Large Image Canvas */}
        <div className="w-full md:w-3/5 bg-gray-50 flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10 w-full h-full max-w-4xl rounded-xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right: Product Information Shell */}
        <div className="w-full md:w-2/5 px-8 md:px-margin-desktop py-16 md:py-section-padding flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto md:mx-0">
            <span className="font-semibold text-sm text-[#6B804D] mb-4 block tracking-wider uppercase">
              {product.category?.name || "Premium Series"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-none font-display">
              {product.name}
            </h1>
            <div className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              ${displayPrice.toFixed(2)}
              {product.salePrice && (
                <span className="line-through text-gray-400 text-lg ml-3 font-normal">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
                {product.description || "Experience uncompromised quality with our flagship product. Engineered for wholesale durability and retail perfection."}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1 uppercase tracking-widest font-semibold">
                    Availability
                  </span>
                  <span className={`text-sm font-bold ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1 uppercase tracking-widest font-semibold">
                    Delivery
                  </span>
                  <span className="text-sm text-gray-900 font-bold">
                    Fast Shipping
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="space-y-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (product.whatsappNumber) {
                    window.open(`https://wa.me/${product.whatsappNumber}?text=Hi, I'm interested in ${product.name}`, '_blank');
                  }
                }}
                className={`flex items-center justify-center gap-3 w-full py-4 rounded-md font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-sm ${
                  product.whatsappNumber 
                    ? "bg-[#25D366] text-white hover:bg-[#20bd5a]" 
                    : "bg-[#6B804D] text-white hover:bg-[#5b6e41]"
                }`}
              >
                {product.whatsappNumber ? <MessageCircle fill="white" /> : <ShoppingCart />}
                {product.whatsappNumber ? "Order on WhatsApp" : "Add to Cart"}
              </button>
              <div className="flex items-center justify-center gap-4 py-4 text-gray-500 text-[11px] uppercase tracking-widest font-semibold">
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-[#6B804D]" />
                  Premium Quality
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Truck size={16} className="text-[#6B804D]" />
                  Fast Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images Grid if available */}
      {product.images && product.images.length > 1 && (
        <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-8 font-display text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images.map((img: any, i: number) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 aspect-square flex items-center justify-center">
                <img src={urlFor(img).width(400).url()} alt={`${product.name} ${i+1}`} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
