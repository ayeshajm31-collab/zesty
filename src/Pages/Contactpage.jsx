
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "sonner";
import { useState } from "react";

function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you for your feedback!");

    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2]">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
              Get in touch
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#24332D] md:text-7xl">
              We'd love to
              <br />
              <span className="text-[#315C4B]">hear from you.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#718078] md:text-lg">
              Have a question, suggestion, or simply want to share your
              experience with Zesty? Your thoughts matter to us.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="border-y border-[#E8E2D7] bg-[#F1EBDD]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              {/* Left Side */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315C4B]">
                  Let's talk
                </p>

                <h2 className="mt-3 max-w-md font-serif text-4xl leading-tight text-[#24332D]">
                  Every message helps us make Zesty better.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#718078]">
                  Whether you've discovered a dish you loved, have an idea
                  for something new, or found something we could improve,
                  we're always happy to hear from you.
                </p>

                {/* Contact Info */}
                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#718078]">
                      Email
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#24332D]">
                      hello@zesty.com
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#718078]">
                      Response time
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#24332D]">
                      We usually get back to you within 1–2 days.
                    </p>
                  </div>
                </div>

                {/* Suggestion Box */}
                <div className="mt-10 rounded-[1.75rem] border border-[#E8E2D7] bg-white p-6 shadow-sm">
                  <div className="text-3xl">✦</div>

                  <h3 className="mt-4 font-serif text-2xl text-[#24332D]">
                    Have a suggestion?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#718078]">
                    Tell us what you'd like to see on Zesty. New categories,
                    features, improvements, or anything that could make
                    your food experience more enjoyable.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-[2rem] border border-[#E8E2D7] bg-white p-7 shadow-sm md:p-9">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-[#24332D]">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm text-[#718078]">
                    We appreciate every message and every suggestion.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#24332D]">
                      Your name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-[#D8D0C2] bg-[#FAF8F2] px-4 py-3.5 text-sm text-[#24332D] outline-none transition focus:border-[#315C4B] focus:ring-2 focus:ring-[#315C4B]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#24332D]">
                      Email address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-[#D8D0C2] bg-[#FAF8F2] px-4 py-3.5 text-sm text-[#24332D] outline-none transition focus:border-[#315C4B] focus:ring-2 focus:ring-[#315C4B]/10"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#24332D]">
                      What would you like to share?
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#D8D0C2] bg-[#FAF8F2] px-4 py-3.5 text-sm text-[#24332D] outline-none transition focus:border-[#315C4B] focus:ring-2 focus:ring-[#315C4B]/10"
                    >
                      <option>General Inquiry</option>
                      <option>Feedback</option>
                      <option>Suggestion</option>
                      <option>Report a Problem</option>
                      <option>Something I Loved</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#24332D]">
                      Your message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your thoughts with us..."
                      required
                      rows="6"
                      className="w-full resize-none rounded-xl border border-[#D8D0C2] bg-[#FAF8F2] px-4 py-3.5 text-sm text-[#24332D] outline-none transition focus:border-[#315C4B] focus:ring-2 focus:ring-[#315C4B]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#315C4B] py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#24332D] hover:shadow-md active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="rounded-[2.5rem] bg-[#315C4B] px-6 py-16 text-center text-[#FAF8F2] md:px-12">
            <div className="text-3xl text-[#E9A66F]">✦ ✦ ✦</div>

            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
              Thanks for helping us make Zesty even better.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#DCE5DF]">
              Every question, idea, and piece of feedback gives us a chance
              to improve. We genuinely appreciate you taking the time to
              reach out.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contactpage;

