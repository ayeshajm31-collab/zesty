
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#E8E2D7] bg-[#315C4B] text-[#FAF8F2]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/home"
              className="text-3xl font-bold tracking-[0.08em]"
            >
              ZESTY.
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#DCE5DF]">
              Discover delicious dishes, explore new flavors, and find
              something worth craving.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-serif text-xl">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#DCE5DF]">
              <Link
                to="/home"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/food"
                className="transition hover:text-white"
              >
                Menu
              </Link>

              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* More */}
          <div>
            <h3 className="font-serif text-xl">
              Zesty
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#DCE5DF]">
              Fresh ideas.
              <br />
              Delicious discoveries.
              <br />
              Good food, good mood.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/15" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-xs text-[#C9D8D0]">
            © {new Date().getFullYear()} Zesty. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-[#FAF8F2] transition hover:text-[#E9A66F]"
          >
            Back to top
            <span className="transition duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;