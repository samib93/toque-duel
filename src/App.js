import React from "react";
import Navbar from "./navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Bienvenue sur Toque en Duel !</h1>
      </main>
    </div>
  );
}

export default App;