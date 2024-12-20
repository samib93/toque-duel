import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/navbar";
import Login from "../src/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>Bienvenue, {user.name} !</h1>} />
            {/* Ajoute d'autres routes ici */}
          </Routes>
        </>
      ) : (
        <Login onLogin={setUser} /> // Passer la fonction onLogin
      )}
    </Router>
  );
}

export default App;
