
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="min-h-screen bg-[#FAF8F2] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718078]">
          Zesty Admin
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#24332D]">
          Dashboard
        </h1>

        <p className="mt-2 max-w-xl text-[#718078]">
          Manage your Zesty products and keep track of customer orders.
        </p>

        {/* Dashboard Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Products */}
          <div className="rounded-2xl border border-[#E8E2D7] bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#718078]">
                  MENU
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#24332D]">
                  Products
                </h2>

                <p className="mt-3 max-w-sm text-[#718078]">
                  Add, edit and remove food items from your Zesty menu.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1EBDD] text-xl">
                🍽️
              </div>
            </div>

            <Link
              to="/admin/products"
              className="mt-7 inline-block rounded-lg bg-[#315C4B] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#264A3B]"
            >
              Manage Products →
            </Link>
          </div>

          {/* Orders */}
          <div className="rounded-2xl border border-[#E8E2D7] bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#718078]">
                  SALES
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#24332D]">
                  Orders
                </h2>

                <p className="mt-3 max-w-sm text-[#718078]">
                  View orders placed by your Zesty customers.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1EBDD] text-xl">
                📦
              </div>
            </div>

            <Link
              to="/admin/orders"
              className="mt-7 inline-block rounded-lg border border-[#315C4B] px-5 py-3 text-sm font-medium text-[#315C4B] transition hover:bg-[#315C4B] hover:text-white"
            >
              View Orders →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Admin;