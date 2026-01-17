export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About EliteManTours</h1>
          <p className="text-lg text-emerald-100">
            Creating memories through extraordinary adventures since 2015
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Elite Man Tours was founded in 2015 by a group of adventure
            enthusiasts who shared a passion for exploring the world's most
            incredible destinations. What started as a small team of guide
            friends has grown into a world-class adventure tour company.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            We believe that adventure isn't just about reaching a destination –
            it's about the journey, the people you meet, and the personal growth
            you experience along the way. Every tour we offer is designed with
            passion, safety, and unforgettable memories in mind.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the past years, we've guided thousands of adventurers to
            breathtaking peaks, pristine waters, dense jungles, and forgotten
            ruins. Today, we're proud to be one of the most trusted names in
            adventure tourism worldwide.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                Safety First
              </h3>
              <p className="text-gray-700">
                We maintain the highest safety standards with certified
                equipment, expert guides, and rigorous training protocols.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We're committed to protecting the environments we explore
                through eco-friendly practices and supporting local communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                Excellence
              </h3>
              <p className="text-gray-700">
                From planning to execution, we deliver exceptional experiences
                that exceed expectations every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "John Adventure", role: "Founder & CEO", icon: "👨‍💼" },
              { name: "Sarah Peak", role: "Lead Guide", icon: "👩‍🏫" },
              { name: "Mike Explorer", role: "Safety Officer", icon: "🧗" },
              { name: "Lisa Compass", role: "Tour Director", icon: "🧭" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">
                  15+ years of experience in adventure tourism
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <p className="text-lg">Happy Adventurers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Destinations</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Certifications & Partnerships
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">PADI Certified</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">ISO 21101 Certified</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">Leave No Trace Partner</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">
                Adventure Travel World Summit
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">
                World Wildlife Fund Partner
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-bold text-gray-900">TripAdvisor Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
