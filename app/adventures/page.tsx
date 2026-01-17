import Link from "next/link";

export default function Adventures() {
  const tours = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      location: "Nepal",
      duration: "14 days",
      price: "$2,499",
      difficulty: "Hard",
      icon: "⛰️",
      description: "Trek to the base of the world's highest mountain",
      features: [
        "Expert guides",
        "Full accommodation",
        "Meals included",
        "Altitude acclimatization",
      ],
    },
    {
      id: 2,
      name: "Great Barrier Reef Dive",
      location: "Australia",
      duration: "7 days",
      price: "$1,799",
      difficulty: "Intermediate",
      icon: "🤿",
      description: "Explore the world's largest coral reef system",
      features: [
        "PADI certified instructors",
        "All equipment",
        "Daily dives",
        "Sea life expertise",
      ],
    },
    {
      id: 3,
      name: "Patagonia Adventure",
      location: "Argentina",
      duration: "10 days",
      price: "$2,199",
      difficulty: "Hard",
      icon: "🧗",
      description:
        "Rock climbing and hiking in South America's most dramatic landscapes",
      features: [
        "Rock climbing",
        "Glacier hiking",
        "Mountain climbing",
        "Photography tours",
      ],
    },
    {
      id: 4,
      name: "Amazon Jungle Expedition",
      location: "Brazil",
      duration: "12 days",
      price: "$2,099",
      difficulty: "Intermediate",
      icon: "🌿",
      description:
        "Discover wildlife and indigenous cultures in the rainforest",
      features: [
        "Wildlife guides",
        "Jungle camping",
        "Canoe expeditions",
        "Cultural immersion",
      ],
    },
    {
      id: 5,
      name: "Kilimanjaro Summit",
      location: "Tanzania",
      duration: "8 days",
      price: "$1,899",
      difficulty: "Hard",
      icon: "⛰️",
      description: "Climb Africa's highest peak",
      features: [
        "Altitude training",
        "Expert porters",
        "All meals",
        "Summit success focus",
      ],
    },
    {
      id: 6,
      name: "Colorado River Rafting",
      location: "USA",
      duration: "5 days",
      price: "$999",
      difficulty: "Intermediate",
      icon: "🚣",
      description: "White water rafting through the Grand Canyon",
      features: [
        "Professional rafting guides",
        "Safety equipment",
        "Camping gear",
        "All meals",
      ],
    },
    {
      id: 7,
      name: "Iceland Skydiving Adventure",
      location: "Iceland",
      duration: "3 days",
      price: "$1,299",
      difficulty: "Beginner",
      icon: "🪂",
      description: "Skydive over Iceland's stunning glaciers and waterfalls",
      features: [
        "Tandem jumps",
        "Video recording",
        "Training included",
        "Scenic locations",
      ],
    },
    {
      id: 8,
      name: "Ziplining Through Cloud Forests",
      location: "Costa Rica",
      duration: "4 days",
      price: "$899",
      difficulty: "Beginner",
      icon: "🌳",
      description: "Fly through the canopy on the world's longest ziplines",
      features: [
        "Professional harness",
        "Safety training",
        "Canopy lodges",
        "Wildlife viewing",
      ],
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">
          Our Adventures
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover your next unforgettable experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-700 p-8 text-center">
                <div className="text-6xl mb-4">{tour.icon}</div>
                <h2 className="text-2xl font-bold text-white">{tour.name}</h2>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">📍 {tour.location}</p>
                    <p className="text-gray-600">⏱️ {tour.duration}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-bold text-lg ${
                        tour.difficulty === "Beginner"
                          ? "text-emerald-600"
                          : tour.difficulty === "Intermediate"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {tour.difficulty}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{tour.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tour.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-emerald-600">
                    {tour.price}
                  </span>
                  <Link
                    href="/contact"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Custom Adventures Available
          </h2>
          <p className="text-gray-600 mb-6">
            Don't see what you're looking for? We can create a custom adventure
            tailored to your interests.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition inline-block"
          >
            Plan Your Custom Adventure
          </Link>
        </div>
      </div>
    </main>
  );
}
