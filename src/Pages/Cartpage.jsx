import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "sonner";
import { useState } from "react";

function Cartpage({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      setCart(
        cart.filter(
          (cartItem) => cartItem.idMeal !== item.idMeal
        )
      );
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.idMeal === item.idMeal
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        )
      );
    }
  };

  const increaseQuantity = (item) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.idMeal === item.idMeal
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    );
  };

  const removeItem = (item) => {
    setCart(
      cart.filter(
        (cartItem) => cartItem.idMeal !== item.idMeal
      )
    );
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    toast.success("Your order has been placed successfully!");
  };

  const handleCancelOrder = () => {
  setOrderPlaced(false);
  toast.success("Order cancelled successfully!");
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
            {orderPlaced ? "Order Being Prepared" : "Your Cart"}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#718078]">
            {orderPlaced
              ? "Your order has been received and is now being prepared."
              : "Review your selected dishes and adjust your order before checkout."}
          </p>
        </section>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <section className="mt-12 rounded-[2rem] border border-[#E8E2D7] bg-white px-6 py-20 text-center shadow-sm">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-6 font-serif text-3xl text-[#24332D]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[#718078]">
              Looks like you haven't added anything yet. Head back to
              the menu and discover something delicious.
            </p>
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
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="h-32 w-full rounded-2xl object-cover sm:w-36"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#24332D]">
                        {item.strMeal}
                      </h2>

                      <p className="mt-2 font-semibold text-[#315C4B]">
                        Rs. {item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-5 flex items-center gap-3">
                        {/* Minus */}
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D0C2] text-lg text-[#24332D] transition duration-200 hover:scale-105 hover:bg-[#F1EBDD] active:scale-95"
                          aria-label={`Decrease ${item.strMeal} quantity`}
                        >
                          −
                        </button>

                        {/* Quantity */}
                        <span className="min-w-6 text-center font-semibold text-[#24332D]">
                          {item.quantity}
                        </span>

                        {/* Plus */}
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315C4B] text-lg text-white transition duration-200 hover:scale-105 hover:bg-[#24332D] active:scale-95"
                          aria-label={`Increase ${item.strMeal} quantity`}
                        >
                          +
                        </button>

                        {/* Remove */}
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
                        Rs. {item.price * item.quantity}
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
                    (total, item) => total + item.quantity,
                    0
                  )}
                  )
                </span>

                <span>Rs. {subtotal}</span>
              </div>

              <div className="mt-4 flex justify-between text-sm text-[#718078]">
                <span>Delivery</span>
                <span>Rs. 100</span>
              </div>

              <div className="my-6 border-t border-[#D8D0C2]" />

              <div className="flex justify-between text-lg font-semibold text-[#24332D]">
                <span>Total</span>

                <span>Rs. {subtotal + 100}</span>
              </div>
<div className="mt-7 space-y-3">
  <button
    onClick={handlePlaceOrder}
    disabled={orderPlaced}
    className={`w-full rounded-full py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 ${
      orderPlaced
        ? "cursor-not-allowed bg-[#718078]"
        : "bg-[#315C4B] hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md active:scale-[0.98]"
    }`}
  >
    {orderPlaced ? "Order Being Prepared" : "Place Order"}
  </button>

  {orderPlaced && (
    <button
      onClick={handleCancelOrder}
      className="w-full rounded-full border border-red-200 bg-white py-3.5 text-sm font-semibold text-red-500 transition duration-300 hover:bg-red-50 active:scale-[0.98]"
    >
      Cancel Order
    </button>
  )}
</div>
            </aside>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cartpage;