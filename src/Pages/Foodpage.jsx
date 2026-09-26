import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "../LIB/supabaseClient";

function Foodpage({ cart, setCart }) {
  const [meals, setMeals] = useState([]);
  const [supabaseProducts, setSupabaseProducts] = useState([]);
  const [category, setCategory] = useState("Seafood");
  const [loading, setLoading] = useState(true);

  // Fetch Zesty products from Supabase
  useEffect(() => {
    const fetchSupabaseProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log("Error fetching Zesty products:", error);
        return;
      }

      setSupabaseProducts(data || []);
    };

    fetchSupabaseProducts();
  }, []);

  // Fetch TheMealDB dishes
  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );

        const data = await response.json();

        setMeals(data.meals || []);
      } catch (error) {
        console.log("Error fetching meals:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [category]);

  const handleAddToCart = (meal) => {
    const existingItem = cart.find(
      (item) => item.idMeal === meal.idMeal
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.idMeal === meal.idMeal
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

      toast.success(`${meal.strMeal} quantity increased!`);
    } else {
      setCart([
        ...cart,
        {
          ...meal,
          quantity: 1,
        },
      ]);

      toast.success(`${meal.strMeal} added to cart!`);
    }
  };

  // Filter products added by admin
  const filteredSupabaseProducts = supabaseProducts.filter((product) => {
    if (category === "Seafood") {
      return product.category === "Seafood";
    }

    return product.category === category;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
            Explore the menu
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-[#24332D] md:text-6xl">
                Find something
                <br />
                <span className="text-[#315C4B]">delicious.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#718078]">
                Browse our selection of dishes and discover your next
                favorite meal.
              </p>
            </div>

            <div className="text-sm text-[#718078]">
              Fresh picks for every craving.
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-y border-[#E8E2D7] bg-[#F1EBDD]">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-wrap gap-3">
              {[
                "All",
                "Seafood",
                "Chicken",
                "Beef",
                "Dessert",
                "Vegetarian",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === "All") {
                      setCategory("Seafood");
                    } else {
                      setCategory(item);
                    }
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ${
                    (item === "All" && category === "Seafood") ||
                    item === category
                      ? "bg-[#315C4B] text-white"
                      : "border border-[#D8D0C2] bg-[#FAF8F2] text-[#24332D] hover:border-[#315C4B] hover:text-[#315C4B]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Food Grid */}
        <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">

          {/* Zesty Products */}
          {filteredSupabaseProducts.length > 0 && (
            <div className="mb-14">
              <div className="mb-8">
                <p className="text-sm text-[#315C4B]">
                  Added by Zesty
                </p>

                <h2 className="mt-1 font-serif text-3xl text-[#24332D]">
                  Our menu
                </h2>
              </div>

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSupabaseProducts.map((product) => {
                  const productForCart = {
                    idMeal: `zesty-${product.id}`,
                    strMeal: product.name,
                    strMealThumb: product.image_url,
                    price: Number(product.price),
                  };

                  return (
                    <div
                      key={`zesty-${product.id}`}
                      className="group overflow-hidden rounded-[1.75rem] border border-[#E8E2D7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-64 w-full items-center justify-center bg-[#F1EBDD] text-[#718078]">
                            No image
                          </div>
                        )}

                        <span className="absolute left-4 top-4 rounded-full bg-[#FAF8F2]/90 px-3 py-1 text-xs font-semibold text-[#315C4B] backdrop-blur-sm">
                          Zesty Special
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold text-[#24332D]">
                            {product.name}
                          </h3>

                          <span className="whitespace-nowrap font-semibold text-[#315C4B]">
                            Rs. {product.price}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[#718078]">
                          A fresh selection from the Zesty menu.
                        </p>

                        <button
                          onClick={() =>
                            handleAddToCart(productForCart)
                          }
                          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#315C4B] py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                        >
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            +
                          </span>

                          <span>Add to cart</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TheMealDB Products */}
          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-sm text-[#718078]">
                  Showing our favorites
                </p>

                <h2 className="mt-1 font-serif text-3xl text-[#24332D]">
                  Popular dishes
                </h2>
              </div>

              <p className="hidden text-sm text-[#718078] sm:block">
                {meals.length} dishes
              </p>
            </div>

            {loading ? (
              <div className="py-20 text-center">
                <p className="text-[#718078]">
                  Loading delicious dishes...
                </p>
              </div>
            ) : meals.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-[#718078]">
                  No dishes found.
                </p>
              </div>
            ) : (
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {meals.map((meal) => {
                  const price =
                    300 + (Number(meal.idMeal) % 7) * 100;

                  const mealForCart = {
                    ...meal,
                    price,
                  };

                  return (
                    <div
                      key={meal.idMeal}
                      className="group overflow-hidden rounded-[1.75rem] border border-[#E8E2D7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <span className="absolute left-4 top-4 rounded-full bg-[#FAF8F2]/90 px-3 py-1 text-xs font-semibold text-[#315C4B] backdrop-blur-sm">
                          Zesty Pick
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold text-[#24332D]">
                            {meal.strMeal}
                          </h3>

                          <span className="whitespace-nowrap font-semibold text-[#315C4B]">
                            Rs. {price}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[#718078]">
                          A delicious dish selected for your next craving.
                        </p>

                        <button
                          onClick={() =>
                            handleAddToCart(mealForCart)
                          }
                          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#315C4B] py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                        >
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            +
                          </span>

                          <span>Add to cart</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Foodpage;