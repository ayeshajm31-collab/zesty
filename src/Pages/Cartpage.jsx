
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "../LIB/supabaseClient";

function Cartpage({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const delivery = 100;
  const total = subtotal + delivery;

  const decreaseQuantity = (item) => {
    setCart((previousCart) =>
      previousCart
        .map((cartItem) =>
          cartItem.idMeal === item.idMeal
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const increaseQuantity = (item) => {
    setCart((previousCart) =>
      previousCart.map((cartItem) =>
        cartItem.idMeal === item.idMeal
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const removeItem = (item) => {
    setCart((previousCart) =>
      previousCart.filter(
        (cartItem) => cartItem.idMeal !== item.idMeal
      )
    );

    toast.success(`${item.strMeal} removed from cart.`);
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0 || placingOrder || orderPlaced) return;

    setPlacingOrder(true);

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        toast.error("Please log in to place your order.");
        return;
      }

      const orderItems = cart.map((item) => ({
        id: item.idMeal,
        name: item.strMeal,
        price: Number(item.price),
        quantity: item.quantity,
        image: item.strMealThumb,
      }));

      const { error } = await supabase.from("orders").insert([
        {
          user_id: user.id,
          items: orderItems,
          total: total,
          status: "Pending",
        },
      ]);

      if (error) {
        throw error;
      }

      setOrderPlaced(true);
      setCart([]);

      toast.success("Your order has been placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Couldn't place your order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
            Your order
          </p>

          <h1 className="mt-3 font-serif text-5xl text-[#24332D] md:text-6xl">
            {orderPlaced ? "Order Confirmed" : "Your Cart"}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#718078]">
            {orderPlaced
              ? "Thank you for ordering from Zesty. Your order has been received."
              : "Review your selected dishes and adjust your order before checkout."}
          </p>
        </section>

        {/* Order Confirmation */}
        {orderPlaced ? (
          <section className="mt-12 rounded-[2rem] border border-[#E8E2D7] bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F1EBDD] text-4xl text-[#315C4B]">
              ✓
            </div>

            <h2 className="mt-6 font-serif text-3xl text-[#24332D]">
              Order placed successfully!
            </h2>

            <p className="mx-auto mt-4 max-w-md leading-7 text-[#718078]">
              Your order has been received and is awaiting preparation.
              Thank you for choosing Zesty!
            </p>

            <a
              href="/food"
              className="mt-8 inline-block rounded-full bg-[#315C4B] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24332D]"
            >
              Explore More Food →
            </a>
          </section>
        ) : cart.length === 0 ? (
          /* Empty Cart */
          <section className="mt-12 rounded-[2rem] border border-[#E8E2D7] bg-white px-6 py-20 text-center shadow-sm">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-6 font-serif text-3xl text-[#24332D]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[#718078]">
              Looks like you haven't added anything yet. Head back to
              the menu and discover something delicious.
            </p>

            <a
              href="/food"
              className="mt-8 inline-block rounded-full bg-[#315C4B] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24332D]"
            >
              Browse Menu →
            </a>
          </section>
        ) : (
          /* Cart Content */
          <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Cart Items */}
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.idMeal}
                  className="group rounded-[1.75rem] border border-[#E8E2D7] bg-white p-5 shadow-sm transition duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    {/* Image */}
                    {item.strMealThumb ? (
                      <img
                        src={item.strMealThumb}
                        alt={item.strMeal}
                        className="h-32 w-full rounded-2xl object-cover sm:w-36"
                      />
                    ) : (
                      <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-[#F1EBDD] text-[#718078] sm:w-36">
                        No image
                      </div>
                    )}

                    {/* Details */}
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#24332D]">
                        {item.strMeal}
                      </h2>

                      <p className="mt-2 font-semibold text-[#315C4B]">
                        Rs. {Number(item.price).toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-5 flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D0C2] text-lg text-[#24332D] transition duration-200 hover:scale-105 hover:bg-[#F1EBDD] active:scale-95"
                          aria-label={`Decrease ${item.strMeal} quantity`}
                        >
                          −
                        </button>

                        <span className="min-w-6 text-center font-semibold text-[#24332D]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315C4B] text-lg text-white transition duration-200 hover:scale-105 hover:bg-[#24332D] active:scale-95"
                          aria-label={`Increase ${item.strMeal} quantity`}
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeItem(item)}
                          className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-red-200 text-xl text-red-500 transition duration-200 hover:scale-105 hover:bg-red-50 active:scale-95"
                          aria-label={`Remove ${item.strMeal}`}
                        >
                          ×
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-[#718078]">
                        Item total
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[#24332D]">
                        Rs.{" "}
                        {(
                          Number(item.price) * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-[2rem] border border-[#E8E2D7] bg-[#F1EBDD] p-7 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl text-[#24332D]">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-[#718078]">
                <span>
                  Items (
                  {cart.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}
                  )
                </span>

                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>

              <div className="mt-4 flex justify-between text-sm text-[#718078]">
                <span>Delivery</span>
                <span>Rs. {delivery}</span>
              </div>

              <div className="my-6 border-t border-[#D8D0C2]" />

              <div className="flex justify-between text-lg font-semibold text-[#24332D]">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={placingOrder}
                className={`mt-7 w-full rounded-full py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 ${
                  placingOrder
                    ? "cursor-not-allowed bg-[#718078]"
                    : "bg-[#315C4B] hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md active:scale-[0.98]"
                }`}
              >
                {placingOrder ? "Placing Order..." : "Place Order"}
              </button>

              <p className="mt-4 text-center text-xs text-[#718078]">
                Review your items before placing your order.
              </p>
            </aside>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cartpage;