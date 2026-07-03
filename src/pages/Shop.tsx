import { useState, useMemo, useEffect } from "react";
import { Marquee } from "../components/Marquee";
import { ProductCard } from "../components/ProductCard";
import { useSanityProducts } from "../sanity/client";
import { useLocation } from "react-router-dom";

export default function Shop() {
  const { products, categories, loading, error } = useSanityProducts();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || "All";
  
  const [activeFilter, setActiveFilter] = useState(initialCategory);

  useEffect(() => {
    if (searchParams.get('category')) {
      setActiveFilter(searchParams.get('category')!);
    }
  }, [location.search]);

  const dynamicFilters = useMemo(() => {
    return ["All", ...categories.map(c => c.name)];
  }, [categories]);

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter(
          (p) => p.category?.name?.toLowerCase() === activeFilter.toLowerCase() || p.category?.slug?.current === activeFilter
        );

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center p-8 text-center pt-20">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h2>
        <p className="text-gray-700 max-w-md mb-6">
          Failed to fetch data from Sanity CMS. If you just set this up, you might need to add this URL to your CORS origins in Sanity.
        </p>
        <a href="/studio" className="bg-[#6B804D] text-white px-6 py-3 rounded-md hover:bg-[#5b6e41] transition-colors">
          Open Sanity Studio to Fix
        </a>
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

  return (
    <div className="animate-in fade-in duration-700 pt-20">
      {/* Hero Section */}
      <section className="bg-[#6B804D] text-white py-16">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Shop All
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Premium quality accessories curated for the modern professional.
            Explore our wide range of products.
          </p>
        </div>
      </section>

      {/* Filters & Shop Grid */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-[500px]">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {dynamicFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                (activeFilter.toLowerCase() === f.toLowerCase() || (f === "All" && activeFilter === "All"))
                  ? "bg-[#6B804D] text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-[#6B804D] hover:text-[#6B804D]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500 text-lg">
              No products found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
