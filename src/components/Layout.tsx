import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { cn } from "../lib/utils";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF9F5] text-gray-900 overflow-x-hidden">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-[#6B804D]"
          >
            <ShoppingBag strokeWidth={2.5} size={28} />
            ShopMate
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" current={location.pathname}>
              Home
            </NavLink>
            <NavLink to="/shop" current={location.pathname}>
              Shop
            </NavLink>
            <NavLink to="/about" current={location.pathname}>
              About
            </NavLink>
            <NavLink to="/contact" current={location.pathname}>
              Contact
            </NavLink>
          </nav>
          <Link
            to="/shop"
            className="bg-[#6B804D] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#5b6e41] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            Shop Now
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-[73px]">
        <Outlet />
      </main>

      {/* Shared Footer with Glassmorphism */}
      <footer className="relative mt-20">
        {/* Background decorative blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-[#6B804D]/20 rounded-full blur-[80px] -z-10"></div>
        
        <div className="bg-white/60 backdrop-blur-xl border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="px-margin-mobile md:px-margin-desktop py-16 w-full max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Column 1 */}
              <div>
                <Link
                  to="/"
                  className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-[#6B804D] mb-4"
                >
                  <ShoppingBag strokeWidth={2.5} size={24} />
                  ShopMate
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Your one-stop shop for quality products at the best prices.
                </p>
                <div className="flex gap-4">
                  {/* Social Icons could go here */}
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li><Link to="/" className="hover:text-[#6B804D] transition-colors">Home</Link></li>
                  <li><Link to="/shop" className="hover:text-[#6B804D] transition-colors">Shop</Link></li>
                  <li><Link to="/categories" className="hover:text-[#6B804D] transition-colors">Categories</Link></li>
                  <li><Link to="/about" className="hover:text-[#6B804D] transition-colors">About Us</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Customer Service</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-[#6B804D] transition-colors">Track Order</a></li>
                  <li><a href="#" className="hover:text-[#6B804D] transition-colors">Returns & Refunds</a></li>
                  <li><a href="#" className="hover:text-[#6B804D] transition-colors">Shipping Policy</a></li>
                  <li><a href="#" className="hover:text-[#6B804D] transition-colors">Help Center</a></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6">Subscribe to our newsletter</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest updates on new products and upcoming sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2.5 bg-white/80 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B804D]/50 text-sm"
                  />
                  <button className="bg-[#6B804D] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#5b6e41] transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  to,
  current,
  children,
}: {
  to: string;
  current: string;
  children: React.ReactNode;
}) {
  const isActive = current === to;
  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors",
        isActive
          ? "text-[#6B804D]"
          : "text-gray-600 hover:text-[#6B804D]"
      )}
    >
      {children}
    </Link>
  );
}
