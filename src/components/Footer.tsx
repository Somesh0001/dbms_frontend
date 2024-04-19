function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Embark on a journey with Group 1 &apos; s DBMS project, crafting a tailored
            database solution for retailers. Explore inventory management, sales
            tracking, and customer interactions, unveiling the power of
            efficient data management in retail operations.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/queries"
                className="hover:text-white transition-colors duration-300"
              >
                Queries
              </a>
            </li>
            <li>
              <a
                href="/our-team"
                className="hover:text-white transition-colors duration-300"
              >
                Our-Team
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Hostel F, NIT Jamshedpur</p>
          <p>Jharkhand, 831014</p>
          <p>Email: 2022ugcs006@nitjsr.ac.in</p>
          <p>Phone: +91 9044283186</p>
        </div>
      </div>
      {/* <p className="text-center text-xs pt-8">© 2024 Group I | DBMS</p> */}
    </footer>
  );
}

export default Footer;
