export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Elite Man Tours</h3>
            <p className="text-emerald-100">
              Experience the most thrilling adventures across the globe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/adventures" className="hover:text-white transition">
                  Adventures
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-emerald-100">Email: info@elitemantours.com</p>
            <p className="text-emerald-100">Phone: +1 (555) 123-4567</p>
            <p className="text-emerald-100">
              Address: 123 Adventure St, Explorer City
            </p>
          </div>
        </div>
        <div className="border-t border-emerald-700 pt-8">
          <p className="text-center text-emerald-100">
            &copy; {currentYear} Elite Man Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
