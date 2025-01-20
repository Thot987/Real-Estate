import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ReservationProvider } from "./context/ReservationContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Reservations from "./pages/Reservations.jsx";
import SearchBar from "./components/SearchBar.jsx";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ReservationProvider>
      <Router>
        <div className="app">
          <Header />
          <SearchBar onSearch={handleSearch} />
          <main>
            <Routes>
              <Route path="/" element={<Home searchQuery={searchQuery} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReservationProvider>
  );
}

export default App;

