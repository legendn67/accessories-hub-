import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SimpleProductCard } from "../components/ProductCard";
import { useSanityProducts, urlFor } from "../sanity/client";
import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  HeadphonesIcon,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote
} from "lucide-react";

export default function Home() {
  const { products, categories, loading, error } = useSanityProducts();

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

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  // fallback if no featured products are set
  const displayProducts = featuredProducts.length > 0 ? featuredProducts : products.slice(0, 4);

  const features = [
    {
      title: "Free Shipping",
      desc: "On orders over $50",
      icon: Truck,
    },
    {
      title: "Secure Payment",
      desc: "100% secure payment",
      icon: ShieldCheck,
    },
    {
      title: "Easy Returns",
      desc: "30 days return policy",
      icon: RefreshCcw,
    },
    {
      title: "24/7 Support",
      desc: "Dedicated support",
      icon: HeadphonesIcon,
    },
  ];

  const placeholderCategories = [
    { name: "Electronics", bg: "bg-blue-100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZR8H1GS5Aw9b4EDm6FCN8B2DLmbBUq883UbGLI0XOOAKPrv1gniFzCGDypCaw71kb6xPAlMLLW5zQXLO-FNjVNQGVgPPXeRkD9IAZJ_UAHzSj8PfvjlIdnduLwqp6kJmBRGZJoNs6ALN0Kxg5hoBkbe5Xg3j4SLwmqG9XI5Ja1ulipbe1BFiIMaRGxjbNreEnwqo1bVtDFRtgIrN4kcsnj7NtLfwpzGkiNR6Es7ojYysPiVDLYQL4JspUb_g-zNwrhFGWLr9BxCs" },
    { name: "Fashion", bg: "bg-pink-100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2HurtEBKzaEYZQplqEp24vW5V92OGPZrEkpIQnZ8tX6IsORB9ah8nb3h7D6ElO7NgISo1RaDORd4x58NGJU14v81nQmp6_26eyHPdXhdd9mqqSvlOxdmS36Tga26iVJ2EvtWqRg2pHwRTU2UpN3LV20Yyul3_mWNELf7t6d8EFFfnXYkUIaS-TUlfA2GXcRkKfJfFxhR1fJERsNcw702QVasTXcUkMoH3oNOH20cd40-U2jhtsmr1GT2-nP_RAcj9ZVipPDJGqA" },
    { name: "Home & Kitchen", bg: "bg-orange-100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZR8H1GS5Aw9b4EDm6FCN8B2DLmbBUq883UbGLI0XOOAKPrv1gniFzCGDypCaw71kb6xPAlMLLW5zQXLO-FNjVNQGVgPPXeRkD9IAZJ_UAHzSj8PfvjlIdnduLwqp6kJmBRGZJoNs6ALN0Kxg5hoBkbe5Xg3j4SLwmqG9XI5Ja1ulipbe1BFiIMaRGxjbNreEnwqo1bVtDFRtgIrN4kcsnj7NtLfwpzGkiNR6Es7ojYysPiVDLYQL4JspUb_g-zNwrhFGWLr9BxCs" },
    { name: "Beauty", bg: "bg-purple-100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2HurtEBKzaEYZQplqEp24vW5V92OGPZrEkpIQnZ8tX6IsORB9ah8nb3h7D6ElO7NgISo1RaDORd4x58NGJU14v81nQmp6_26eyHPdXhdd9mqqSvlOxdmS36Tga26iVJ2EvtWqRg2pHwRTU2UpN3LV20Yyul3_mWNELf7t6d8EFFfnXYkUIaS-TUlfA2GXcRkKfJfFxhR1fJERsNcw702QVasTXcUkMoH3oNOH20cd40-U2jhtsmr1GT2-nP_RAcj9ZVipPDJGqA" },
    { name: "Sports", bg: "bg-green-100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZR8H1GS5Aw9b4EDm6FCN8B2DLmbBUq883UbGLI0XOOAKPrv1gniFzCGDypCaw71kb6xPAlMLLW5zQXLO-FNjVNQGVgPPXeRkD9IAZJ_UAHzSj8PfvjlIdnduLwqp6kJmBRGZJoNs6ALN0Kxg5hoBkbe5Xg3j4SLwmqG9XI5Ja1ulipbe1BFiIMaRGxjbNreEnwqo1bVtDFRtgIrN4kcsnj7NtLfwpzGkiNR6Es7ojYysPiVDLYQL4JspUb_g-zNwrhFGWLr9BxCs" },
    { name: "Accessories", bg: "bg-yellow-100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2HurtEBKzaEYZQplqEp24vW5V92OGPZrEkpIQnZ8tX6IsORB9ah8nb3h7D6ElO7NgISo1RaDORd4x58NGJU14v81nQmp6_26eyHPdXhdd9mqqSvlOxdmS36Tga26iVJ2EvtWqRg2pHwRTU2UpN3LV20Yyul3_mWNELf7t6d8EFFfnXYkUIaS-TUlfA2GXcRkKfJfFxhR1fJERsNcw702QVasTXcUkMoH3oNOH20cd40-U2jhtsmr1GT2-nP_RAcj9ZVipPDJGqA" },
  ];
  
  const displayCategories = categories.length > 0 
    ? categories.map((c, i) => ({
        name: c.name,
        slug: c.slug?.current || '',
        bg: placeholderCategories[i % placeholderCategories.length].bg,
        image: c.image ? urlFor(c.image).width(200).url() : placeholderCategories[i % placeholderCategories.length].image,
      }))
    : placeholderCategories.map(c => ({...c, slug: ''}));

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#6B804D] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700 bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FAF9F5] px-margin-mobile md:px-margin-desktop py-12 md:py-20 overflow-hidden relative">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">New Arrivals</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
              Discover The Best<br />Products for You
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Explore our wide range of high-quality products at affordable prices. Shop now and enjoy the best deals!
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/shop"
                className="bg-[#6B804D] text-white px-8 py-3.5 rounded-md font-medium text-base hover:bg-[#5b6e41] transition-colors flex items-center gap-2"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/shop"
                className="bg-white border border-gray-200 text-gray-800 px-8 py-3.5 rounded-md font-medium text-base hover:bg-gray-50 transition-colors"
              >
                Explore Deals
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-10 h-10 rounded-full border-2 border-[#FAF9F5]" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-semibold text-gray-900">10,000+</span> Happy Customers
              </p>
            </div>
          </div>
          <div className="relative order-1 md:order-2 h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Using a placeholder since we don't have the exact image, but styling it nicely */}
            <div className="absolute inset-0 bg-[#f0eee4] rounded-full blur-3xl opacity-50 scale-75"></div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
              alt="Hero Products"
              className="w-full h-full object-cover rounded-3xl z-10 relative shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="px-margin-mobile md:px-margin-desktop py-8 -mt-8 relative z-20">
        <div className="max-w-container-max mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-wrap justify-between gap-8 md:gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-[#F8FAEC] p-4 rounded-full text-[#6B804D]">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-margin-mobile md:px-margin-desktop py-16">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Shop by Categories</h2>
            <Link to="/shop" className="text-sm font-medium hover:text-[#6B804D] transition-colors flex items-center gap-1">
              View All Categories <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex overflow-x-auto pb-6 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 gap-6 md:justify-between snap-x scrollbar-hide">
            {displayCategories.map((cat, i) => (
              <Link key={i} to={`/shop${cat.slug ? `?category=${cat.slug}` : ''}`} className="flex flex-col items-center gap-4 min-w-[120px] snap-center group">
                <div className={`w-32 h-32 rounded-full ${cat.bg} flex items-center justify-center p-6 overflow-hidden transition-transform group-hover:-translate-y-2`}>
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full mix-blend-multiply" />
                </div>
                <span className="font-semibold text-gray-800">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="px-margin-mobile md:px-margin-desktop py-16 bg-gray-50/50">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Best Selling Products</h2>
            <Link to="/shop" className="text-sm font-medium hover:text-[#6B804D] transition-colors flex items-center gap-1">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <SimpleProductCard key={product._id} product={product} />
            ))}
            {displayProducts.length === 0 && (
              <div className="col-span-full py-10 text-center text-gray-500">
                No products found. Add some in Sanity Studio!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="px-margin-mobile md:px-margin-desktop py-16">
        <div className="max-w-container-max mx-auto">
          <div className="bg-[#FAF9F5] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
            <div className="z-10 mb-8 md:mb-0">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2 block">Special Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-display">
                Up to 50% Off
              </h2>
              <p className="text-gray-600 mb-8 max-w-sm">
                Limited time offer on selected items.<br />Hurry up and grab the best deals!
              </p>
              <Link
                to="/shop"
                className="bg-[#6B804D] text-white px-8 py-3.5 rounded-md font-medium text-base hover:bg-[#5b6e41] transition-colors inline-flex items-center gap-2"
              >
                Shop the Sale <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" 
                alt="Shopping Bag Promo" 
                className="w-full max-w-sm rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-margin-mobile md:px-margin-desktop py-16">
        <div className="max-w-container-max mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12 font-display">What Our Customers Say</h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#F8FAEC] rounded-2xl p-8 max-w-sm">
                <Quote className="text-[#6B804D] mb-4 fill-[#6B804D]/20" size={32} />
                <p className="text-gray-700 font-medium mb-6">
                  "Amazing products and fast delivery! ShopMate is my go-to store for all my needs."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">John Doe {i}</h4>
                    <div className="flex text-yellow-400 text-xs">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
