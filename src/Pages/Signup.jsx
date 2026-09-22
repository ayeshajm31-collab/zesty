import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../LIB/supabaseClient";
import { toast } from "sonner";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully!");

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2]">

      <div className="grid min-h-screen md:grid-cols-2">

        {/* Signup form */}
        <div className="flex items-center justify-center px-6 py-12 md:order-1">
          <div className="w-full max-w-md">

            <div className="mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
                Get started
              </p>

              <h1 className="text-4xl font-semibold text-[#24332D] md:text-5xl">
                Join Zesty.
              </h1>

              <p className="mt-4 text-[#718078]">
                Create an account and start discovering delicious food.
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#24332D]">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-[#24332D] outline-none transition placeholder:text-[#9BA49F] focus:border-[#315C4B] focus:ring-4 focus:ring-[#315C4B]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#24332D]">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-[#24332D] outline-none transition placeholder:text-[#9BA49F] focus:border-[#315C4B] focus:ring-4 focus:ring-[#315C4B]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#24332D]">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-[#D8D0C2] bg-white px-4 py-3.5 text-[#24332D] outline-none transition placeholder:text-[#9BA49F] focus:border-[#315C4B] focus:ring-4 focus:ring-[#315C4B]/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#315C4B] py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-[#718078]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#315C4B] transition hover:text-[#24332D]"
              >
                Sign in
              </Link>
            </p>

          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden overflow-hidden bg-[#315C4B] md:order-2 md:flex">

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#E9A66F]/40" />

          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#FAF8F2]/10" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12">

            <Link
              to="/signup"
              className="text-2xl font-bold tracking-[0.08em] text-[#FAF8F2]"
            >
              ZESTY.
            </Link>

            <div>
              <div className="mb-8 text-8xl">
                🥗
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E9A66F]">
                Discover more
              </p>

              <h2 className="max-w-md text-5xl font-semibold leading-tight text-[#FAF8F2]">
                Good food starts with a good craving.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-[#FAF8F2]/70">
                Explore flavors, discover new dishes, and make every meal a
                little more exciting.
              </p>
            </div>

            <p className="text-sm text-[#FAF8F2]/50">
              Good food. Good mood.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;