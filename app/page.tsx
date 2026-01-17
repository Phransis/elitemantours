import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  const adventures = [
    {
      id: 1,
      name: "Mountain Climbing",
      icon: "⛰️",
      desc: "Conquer the world's tallest peaks",
    },
    {
      id: 2,
      name: "Skydiving",
      icon: "🪂",
      desc: "Feel the adrenaline rush from the sky",
    },
    {
      id: 3,
      name: "Scuba Diving",
      icon: "🤿",
      desc: "Explore the wonders of the deep ocean",
    },
    {
      id: 4,
      name: "Rock Climbing",
      icon: "🧗",
      desc: "Master vertical rock faces",
    },
    {
      id: 5,
      name: "Jungle Expeditions",
      icon: "🌿",
      desc: "Discover exotic wildlife and ancient ruins",
    },
    {
      id: 6,
      name: "White Water Rafting",
      icon: "🚣",
      desc: "Navigate thrilling river rapids",
    },
  ];

  return (
    <main>
      {/* Hero Carousel */}
      <section className="w-full">
        <HeroCarousel />
      </section>

      {/* Featured Adventures with Glass Morphism */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
            Our Featured Adventures
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose from our collection of thrilling experiences designed for
            adventurers of all levels
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure) => (
              <div
                key={adventure.id}
                className="glass rounded-xl p-8 hover:shadow-xl transition transform hover:scale-105 border border-white/20"
              >
                <div className="text-6xl mb-4 animate-float">
                  {adventure.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {adventure.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {adventure.desc}
                </p>
                <Link
                  href="/adventures"
                  className="text-emerald-600 font-bold hover:text-green-800 transition inline-flex items-center group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Glass Morphism */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Why Choose Elite Man Tours?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-8 border border-white/20 backdrop-blur-md">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Expert Guides
              </h3>
              <p className="text-gray-700">
                Our experienced guides with decades of combined expertise ensure
                your safety while maximizing your adventure.
              </p>
            </div>
            <div className="glass rounded-xl p-8 border border-white/20 backdrop-blur-md">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Global Destinations
              </h3>
              <p className="text-gray-700">
                Adventure in exotic locations across every continent, from
                tropical jungles to snow-capped peaks.
              </p>
            </div>
            <div className="glass rounded-xl p-8 border border-white/20 backdrop-blur-md">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                100% Safety
              </h3>
              <p className="text-gray-700">
                Top-tier safety equipment and protocols for all activities with
                comprehensive insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What Our Adventurers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Everest Climber",
                testimonial:
                  "The best adventure experience of my life! Professional guides, incredible views, and unforgettable memories.",
                stars: 5,
              },
              {
                name: "Michael Chen",
                role: "Diving Enthusiast",
                testimonial:
                  "Explored the Great Barrier Reef with expert guides. Saw amazing marine life and felt completely safe.",
                stars: 5,
              },
              {
                name: "Emma Williams",
                role: "Jungle Explorer",
                testimonial:
                  "The Amazon expedition was mind-blowing. Learned so much about wildlife and indigenous cultures.",
                stars: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-8 border border-white/20 backdrop-blur-md hover:shadow-lg transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-emerald-100">Happy Adventurers</p>
            </div>
            <div className="glass rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-emerald-100">Destinations</p>
            </div>
            <div className="glass rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-emerald-100">Years Experience</p>
            </div>
            <div className="glass rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="text-emerald-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-8 text-emerald-100">
            Join thousands of adventurers who have experienced the thrill of a
            lifetime
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
