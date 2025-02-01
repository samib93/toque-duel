import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"; 
import Login from "./Login";
import Presentation from "./Presentation"; 
import Calendrier from "./calendrier"; // Ajout du composant Calendrier
import RecetteIA from "../src/recette_ia";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user ? (
        <>
          {/* Barre de navigation affichée si l'utilisateur est connecté */}
          <Navbar user={user} />
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route
              path="/"
              element={
                <div>
                  <h1 className="text-center text-3xl font-bold bg-gray-100">
                    Bienvenue, {user.name} !
                  </h1>
                  <Presentation />
                </div>
              }
            />
            {/* Route pour la page Calendrier */}
            <Route path="/calendrier" element={<Calendrier />} />

            {/* Route pour la page Recette IA */}
            <Route path="/recette_ia" element={<RecetteIA />} />
          </Routes>
        </>
      ) : (
        // Page de connexion si l'utilisateur n'est pas connecté
        <Login onLogin={setUser} />
      )}
    </Router>
  );
}

export default App;
