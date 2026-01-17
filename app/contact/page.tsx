"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adventure: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", adventure: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have questions? Ready to book? Get in touch with our team!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📍 Address</h3>
                <p className="text-gray-600">
                  123 Adventure Street
                  <br />
                  Explorer City, EC 12345
                  <br />
                  World
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">📞 Phone</h3>
                <p className="text-gray-600">
                  Main: +1 (555) 123-4567
                  <br />
                  Support: +1 (555) 987-6543
                  <br />
                  Emergency: +1 (555) 999-9999
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">✉️ Email</h3>
                <p className="text-gray-600">
                  Info: info@elitemantours.com
                  <br />
                  Bookings: bookings@elitemantours.com
                  <br />
                  Support: support@elitemantours.com
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">🕐 Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9AM - 6PM
                  <br />
                  Saturday: 10AM - 4PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✓ Thank you! We'll be in touch within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-bold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-bold mb-2">
                    Adventure Interest
                  </label>
                  <select
                    name="adventure"
                    value={formData.adventure}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="">Select an adventure</option>
                    <option value="mountain-climbing">Mountain Climbing</option>
                    <option value="skydiving">Skydiving</option>
                    <option value="scuba-diving">Scuba Diving</option>
                    <option value="rock-climbing">Rock Climbing</option>
                    <option value="jungle-expedition">Jungle Expedition</option>
                    <option value="white-water-rafting">
                      White Water Rafting
                    </option>
                    <option value="custom">Custom Adventure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Tell us about your adventure dreams..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 2-3 months in advance for popular tours, but can sometimes accommodate last-minute bookings. Contact us for availability.",
              },
              {
                q: "What's included in the tour price?",
                a: "Most tours include accommodation, meals, equipment, and professional guides. Specific inclusions are listed on each adventure page.",
              },
              {
                q: "What if I have fitness concerns?",
                a: "We offer adventures for all fitness levels. Contact us to discuss your concerns and we'll recommend suitable tours.",
              },
              {
                q: "Do you offer group discounts?",
                a: "Yes! Groups of 8 or more receive special pricing. Contact our bookings team for a custom quote.",
              },
              {
                q: "What's your cancellation policy?",
                a: "Full refunds for cancellations up to 30 days before departure. 50% refund from 30-14 days before. Non-refundable within 14 days.",
              },
              {
                q: "Is travel insurance required?",
                a: "We strongly recommend comprehensive travel insurance covering adventure activities. We can provide insurance recommendations.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
