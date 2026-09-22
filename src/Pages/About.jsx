

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
                About Zesty
              </p>

              <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-[#24332D] md:text-7xl">
                Good food
                <br />
                <span className="text-[#315C4B]">starts with discovery.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#718078] md:text-lg">
                Zesty is a food discovery and ordering experience created
                for people who love finding something new to crave.
                From comforting classics to exciting flavors, we make
                exploring food simple, enjoyable, and delicious.
              </p>

              <Link
                to="/food"
                className="mt-8 inline-flex rounded-full bg-[#315C4B] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md"
              >
                Explore the menu
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-[#E8E2D7] bg-[#F1EBDD] p-5 shadow-sm">
                <div className="flex min-h-[380px] items-center justify-center rounded-[2rem] bg-[#E9A66F]/20">
                  <div className="text-center">
                    <div className="text-7xl">🍽️</div>

                    <p className="mt-5 font-serif text-3xl text-[#315C4B]">
                      Discover.
                    </p>

                    <p className="mt-1 font-serif text-3xl text-[#24332D]">
                      Crave. Enjoy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#E8E2D7] bg-white px-5 py-4 shadow-md sm:left-5">
                <p className="text-xs uppercase tracking-[0.15em] text-[#718078]">
                  Our philosophy
                </p>

                <p className="mt-1 font-serif text-lg text-[#24332D]">
                  Food should feel exciting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-y border-[#E8E2D7] bg-[#F1EBDD]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
                  Our story
                </p>

                <h2 className="mt-3 max-w-md font-serif text-4xl leading-tight text-[#24332D] md:text-5xl">
                  More than a menu.
                  <br />
                  It's an experience.
                </h2>
              </div>

              <div className="max-w-2xl space-y-5 text-base leading-8 text-[#718078]">
                <p>
                  Zesty was created around one simple idea: discovering
                  what to eat should be just as enjoyable as eating it.
                </p>

                <p>
                  Instead of making food choices feel complicated, Zesty
                  brings dishes together in one clean and inviting space
                  where you can browse, discover favorites, and build
                  your order with ease.
                </p>

                <p>
                  Every part of the experience is designed to keep the
                  focus where it belongs — on great food and the little
                  moments that make it memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
              What we value
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#24332D] md:text-5xl">
              Simple ideas. Better food experiences.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Point 1 */}
            <div className="rounded-[2rem] border border-[#E8E2D7] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="text-3xl text-[#E9A66F]">01</span>

              <h3 className="mt-6 font-serif text-2xl text-[#24332D]">
                Discover
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#718078]">
                Explore different dishes and flavors instead of always
                choosing the same familiar meal.
              </p>
            </div>

            {/* Point 2 */}
            <div className="rounded-[2rem] border border-[#E8E2D7] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="text-3xl text-[#E9A66F]">02</span>

              <h3 className="mt-6 font-serif text-2xl text-[#24332D]">
                Keep it simple
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#718078]">
                From browsing the menu to adjusting your cart, every step
                is designed to feel clear and effortless.
              </p>
            </div>

            {/* Point 3 */}
            <div className="rounded-[2rem] border border-[#E8E2D7] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="text-3xl text-[#E9A66F]">03</span>

              <h3 className="mt-6 font-serif text-2xl text-[#24332D]">
                Enjoy the moment
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#718078]">
                Good food is about more than filling a plate. It's about
                creating something worth looking forward to.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#315C4B] text-[#FAF8F2]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E9A66F]">
                The Zesty way
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
                From craving to cart in a few simple steps.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="border-t border-white/20 pt-6">
                <span className="font-serif text-4xl text-[#E9A66F]">
                  01
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  Browse
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#DCE5DF]">
                  Explore our selection and find dishes that catch your
                  attention.
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <span className="font-serif text-4xl text-[#E9A66F]">
                  02
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  Build your order
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#DCE5DF]">
                  Add your favorites to the cart and adjust quantities
                  however you like.
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <span className="font-serif text-4xl text-[#E9A66F]">
                  03
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  Enjoy
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#DCE5DF]">
                  Place your order and let Zesty take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="rounded-[2.5rem] border border-[#E8E2D7] bg-[#F1EBDD] px-6 py-16 text-center md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
              Something delicious is waiting
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#24332D] md:text-5xl">
              Your next favorite dish might be one click away.
            </h2>

            <Link
              to="/food"
              className="mt-8 inline-flex rounded-full bg-[#315C4B] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md"
            >
              Explore Menu
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;