import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"; 
import Login from "./Login";
import Presentation from "./Presentation"; 
import Calendrier from "./calendrier"; 
import RecetteIA from "../src/recette_ia";
import Media from "../src/media";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user ? (
        <>
          
          <Navbar user={user} />
          <Routes>
            
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
     
            <Route path="/calendrier" element={<Calendrier />} />

            
            <Route path="/recette_ia" element={<RecetteIA />} />

            <Route path="/media" element={<Media />} />
          </Routes>
        </>
      ) : (
      
        <Login onLogin={setUser} />
      )}
    </Router>
  );
}

export default App;
