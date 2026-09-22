import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Left Content */}
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#315C4B]">
                Discover something delicious
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] text-[#24332D] md:text-7xl">
                Good food,
                <br />
                <span className="text-[#315C4B]">good mood.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#718078] md:text-lg">
                Discover delicious dishes made for whatever you're craving
                today. Explore new flavors, find your favorites, and enjoy
                something truly delicious.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/food"
                  className="rounded-full bg-[#315C4B] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#24332D]"
                >
                  Explore Menu
                </Link>

                <a
                  href="#popular"
                  className="rounded-full border border-[#315C4B] px-7 py-3.5 text-sm font-semibold text-[#315C4B] transition duration-300 hover:bg-[#F1EBDD]"
                >
                  Popular Today
                </a>
              </div>
            </div>

            {/* Temporary Visual */}
            <div className="relative">
              <div className="relative mx-auto flex aspect-square max-w-[500px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#F1EBDD]">

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E9A66F] opacity-60" />

                <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-[#315C4B] opacity-15" />

                <div className="relative z-10 text-center">
                  <div className="text-7xl md:text-8xl">
                    🍽️
                  </div>

                  <p className="mt-5 font-serif text-2xl text-[#24332D]">
                    Something delicious
                  </p>

                  <p className="mt-2 text-sm text-[#718078]">
                    Your next favorite dish awaits.
                  </p>
                </div>
              </div>

              {/* Small floating detail */}
              <div className="absolute -bottom-5 left-5 rounded-2xl bg-[#FAF8F2] px-5 py-4 shadow-lg">
                <p className="text-xs font-medium uppercase tracking-wider text-[#718078]">
                  Fresh picks
                </p>

                <p className="mt-1 font-serif text-lg text-[#24332D]">
                  Made to crave.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Popular Today */}
        <section
          id="popular"
          className="border-y border-[#E8E2D7] bg-[#F1EBDD] px-6 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
                  A little inspiration
                </p>

                <h2 className="mt-2 text-4xl font-semibold text-[#24332D] md:text-5xl">
                  Popular today
                </h2>
              </div>

              <Link
                to="/food"
                className="text-sm font-semibold text-[#315C4B] transition hover:text-[#24332D]"
              >
                View full menu →
              </Link>
            </div>

            {/* Temporary food placeholders */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <div className="overflow-hidden rounded-3xl bg-[#FAF8F2] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-56 items-center justify-center bg-[#E8E1D4] text-6xl">
                  🍝
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#718078]">
                    Comfort food
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#24332D]">
                    Something Delicious
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#718078]">
                    A delicious choice for your next craving.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-[#FAF8F2] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-56 items-center justify-center bg-[#E8E1D4] text-6xl">
                  🍔
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#718078]">
                    Crowd favorite
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#24332D]">
                    Made With Flavor
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#718078]">
                    Discover something you'll want again and again.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-[#FAF8F2] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-56 items-center justify-center bg-[#E8E1D4] text-6xl">
                  🥗
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#718078]">
                    Fresh choice
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#24332D]">
                    Fresh & Tasty
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#718078]">
                    Explore flavors that make every meal better.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
              Find your craving
            </p>

            <h2 className="mt-2 text-4xl font-semibold text-[#24332D] md:text-5xl">
              What are you craving?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[#718078]">
              Explore different flavors and discover something delicious for
              every mood.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Seafood", "Chicken", "Dessert", "Beef", "Vegetarian"].map(
              (category) => (
                <Link
                  key={category}
                  to="/food"
                  className="rounded-full border border-[#D8D0C2] bg-[#FAF8F2] px-6 py-3 text-sm font-medium text-[#24332D] transition duration-300 hover:border-[#315C4B] hover:bg-[#315C4B] hover:text-white"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}

export default Homepage;