
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../LIB/supabaseClient";
import { toast } from "sonner";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Logged out successfully!");
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8E2D7]/80 bg-[#FAF8F2]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="text-2xl font-bold tracking-[0.08em] text-[#315C4B] transition duration-300 group-hover:opacity-80">
            ZESTY.
          </span>

          <span className="text-lg text-[#E9A66F]">✦</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/home"
            className="text-sm font-medium text-[#24332D] transition duration-300 hover:text-[#315C4B]"
          >
            Home
          </Link>

          <Link
            to="/food"
            className="text-sm font-medium text-[#24332D] transition duration-300 hover:text-[#315C4B]"
          >
            Menu
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#24332D] transition duration-300 hover:text-[#315C4B]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-[#24332D] transition duration-300 hover:text-[#315C4B]"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/cart"
            className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#24332D] transition duration-300 hover:bg-[#F1EBDD]"
          >
            <span className="text-base transition duration-300 group-hover:scale-110">
              🛒
            </span>

            <span>Cart</span>
          </Link>

          <button
            onClick={handleLogout}
            className="rounded-full bg-[#315C4B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md"
          >
            Logout
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full text-base transition hover:bg-[#F1EBDD]"
            aria-label="Cart"
          >
            🛒
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E2D7] text-xl text-[#315C4B] transition hover:bg-[#F1EBDD]"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#E8E2D7] bg-[#FAF8F2] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">

            <Link
              to="/home"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24332D] transition hover:bg-[#F1EBDD] hover:text-[#315C4B]"
            >
              Home
            </Link>

            <Link
              to="/food"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24332D] transition hover:bg-[#F1EBDD] hover:text-[#315C4B]"
            >
              Menu
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24332D] transition hover:bg-[#F1EBDD] hover:text-[#315C4B]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24332D] transition hover:bg-[#F1EBDD] hover:text-[#315C4B]"
            >
              Contact
            </Link>

            <button
              onClick={handleLogout}
              className="mt-2 rounded-full bg-[#315C4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24332D]"
            >
              Logout
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

