

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../LIB/supabaseClient";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error);
        setError("Unable to load orders. Please try again.");
      } else {
        setOrders(data || []);
      }

      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F2] px-6 py-10 md:px-10">
      <main className="mx-auto max-w-6xl">
        <Link
          to="/admin"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-white px-5 py-2.5 text-sm font-medium text-[#315C4B] shadow-sm transition duration-300 hover:border-[#315C4B] hover:bg-[#F1EBDD]"
        >
          ← Back to Dashboard
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
          Zesty Admin
        </p>

        <h1 className="mt-2 font-serif text-4xl text-[#24332D] md:text-5xl">
          Customer Orders
        </h1>

        <p className="mt-3 text-[#718078]">
          View orders placed by your Zesty customers.
        </p>

        <div className="mt-8 rounded-2xl border border-[#E8E2D7] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#718078]">
            Total Orders
          </p>

          <p className="mt-2 text-4xl font-semibold text-[#315C4B]">
            {orders.length}
          </p>
        </div>

        {loading ? (
          <p className="py-16 text-center text-[#718078]">
            Loading customer orders...
          </p>
        ) : error ? (
          <p className="mt-8 rounded-xl bg-red-50 p-5 text-red-600">
            {error}
          </p>
        ) : orders.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#E8E2D7] bg-white px-6 py-16 text-center">
            <div className="text-4xl">📦</div>

            <h2 className="mt-4 font-serif text-2xl text-[#24332D]">
              No orders yet
            </h2>

            <p className="mt-2 text-[#718078]">
              Customer orders will appear here once placed.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <article
                key={order.id}
                className="overflow-hidden rounded-2xl border border-[#E8E2D7] bg-white shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E2D7] bg-[#F1EBDD] p-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#24332D]">
                      Order #{order.id}
                    </h2>

                    <p className="mt-1 text-sm text-[#718078]">
                      {new Date(order.created_at).toLocaleString(
                        "en-PK",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }
                      )}
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#315C4B]">
                    {order.status}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-5 font-semibold text-[#24332D]">
                    Ordered Items
                  </h3>

                  <div className="space-y-4">
                    {(Array.isArray(order.items)
                      ? order.items
                      : []
                    ).map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="flex items-center gap-4 border-b border-[#E8E2D7] pb-4 last:border-0"
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#F1EBDD] text-xs text-[#718078]">
                            No image
                          </div>
                        )}

                        <div className="flex-1">
                          <h4 className="font-semibold text-[#24332D]">
                            {item.name}
                          </h4>

                          <p className="mt-1 text-sm text-[#718078]">
                            Rs. {Number(item.price).toLocaleString()}
                            {" × "}
                            {item.quantity}
                          </p>
                        </div>

                        <p className="font-semibold text-[#315C4B]">
                          Rs.{" "}
                          {(
                            Number(item.price) * item.quantity
                          ).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E8E2D7] pt-5">
                    <span className="font-semibold text-[#24332D]">
                      Order Total
                    </span>

                    <span className="text-xl font-bold text-[#315C4B]">
                      Rs. {Number(order.total).toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-[#718078]">
                    Customer ID: {order.user_id}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminOrders;