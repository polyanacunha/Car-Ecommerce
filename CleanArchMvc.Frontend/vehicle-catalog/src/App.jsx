import React, { useState } from "react";
import AppRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // logout
  const handleLogout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      <Footer />
    </>
  );
};

export default App;
