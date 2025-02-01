import React, { useState } from "react";

// Définir les recettes statiques
const recettes = [
  {
    titre: "Spaghetti Carbonara",
    description: "Un plat italien classique avec des pâtes, du bacon, des œufs et du fromage.",
    ingredients: [
      "200g de spaghetti",
      "100g de bacon",
      "2 œufs",
      "50g de parmesan",
      "Sel et poivre"
    ]
  },
  {
    titre: "Salade César",
    description: "Une salade avec de la laitue, des croûtons, du poulet grillé et une sauce crémeuse.",
    ingredients: [
      "1 laitue romaine",
      "150g de poulet grillé",
      "50g de parmesan",
      "Croutons",
      "Sauce César"
    ]
  },
  {
    titre: "Tacos au Poulet",
    description: "Des tacos avec du poulet mariné, des légumes frais et une sauce épicée.",
    ingredients: [
      "4 tortillas",
      "200g de poulet",
      "Tomates",
      "Laitue",
      "Sauce salsa épicée"
    ]
  },
  {
    titre: "Ratatouille",
    description: "Un ragoût de légumes provençal avec des courgettes, des aubergines et des tomates.",
    ingredients: [
      "2 courgettes",
      "2 aubergines",
      "3 tomates",
      "Oignon",
      "Herbes de Provence"
    ]
  }
];

const RecetteIA = () => {
  const [recette, setRecette] = useState(null);
  const [error, setError] = useState("");

  // Fonction pour afficher une recette aléatoire
  const fetchRecette = () => {
    const randomIndex = Math.floor(Math.random() * recettes.length); // Générer un index aléatoire
    setRecette(recettes[randomIndex]); // Mettre à jour la recette affichée
    setError(""); // Réinitialiser l'erreur
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 border-4 border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
          Menu du Chef
        </h2>
        <p className="text-xl font-medium text-center text-gray-700 mb-4">
          Cliquez pour découvrir une nouvelle recette du jour
        </p>
        <button
          onClick={fetchRecette}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Générer une recette
        </button>

        {recette && (
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{recette.titre}</h3>
              <p className="text-gray-700 text-lg mb-4">{recette.description}</p>
              <h4 className="font-medium text-gray-800 mb-2">Ingrédients :</h4>
              <ul className="list-disc pl-6 text-gray-600 text-base">
                {recette.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default RecetteIA;
