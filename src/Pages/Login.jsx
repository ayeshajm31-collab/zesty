import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../LIB/supabaseClient";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Welcome back to Zesty!");

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2]">

      <div className="grid min-h-screen md:grid-cols-2">

        {/* Left visual */}
        <div className="relative hidden overflow-hidden bg-[#315C4B] md:flex">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A66F]/40" />

          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#FAF8F2]/10" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12">

            <Link
              to="/login"
              className="text-2xl font-bold tracking-[0.08em] text-[#FAF8F2]"
            >
              ZESTY.
            </Link>

            <div>
              <div className="mb-8 text-8xl">
                🍽️
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E9A66F]">
                Welcome back
              </p>

              <h2 className="max-w-md text-5xl font-semibold leading-tight text-[#FAF8F2]">
                Your next favorite dish is waiting.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-[#FAF8F2]/70">
                Discover delicious meals, explore new flavors, and find
                something worth craving.
              </p>
            </div>

            <p className="text-sm text-[#FAF8F2]/50">
              Good food. Good mood.
            </p>

          </div>
        </div>

        {/* Login form */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            <div className="mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
                Welcome back
              </p>

              <h1 className="text-4xl font-semibold text-[#24332D] md:text-5xl">
                Sign in to Zesty.
              </h1>

              <p className="mt-4 text-[#718078]">
                Continue your food discovery journey.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

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
                  placeholder="Enter your password"
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
                {loading ? "Logging in..." : "Sign In"}
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-[#718078]">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#315C4B] transition hover:text-[#24332D]"
              >
                Create one
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;