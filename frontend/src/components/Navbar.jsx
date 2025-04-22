import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    // Add your logout logic here (e.g., redirecting, etc.)
    
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-text z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-jetbrains font-bold">csc</div>
        <ul className="flex space-x-6 font-spacemono text-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-cta transition-colors duration-300"
                style={{ scrollMarginTop: "100px" }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contests"
              className="hover:text-cta transition-colors duration-300"
            >
              Contests
            </a>
          </li>
          {isAuthenticated ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-cta text-background px-4 py-2 rounded hover:bg-hover transition-colors duration-300"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <a
                  href="/login"
                  className="bg-cta text-background px-4 py-2 rounded hover:bg-hover transition-colors duration-300"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="bg-cta text-background px-4 py-2 rounded hover:bg-hover transition-colors duration-300"
                >
                  Signup
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
