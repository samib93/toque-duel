import React from "react";
import plat from "../src/images/plats-cuisines.jpg";

const Presentation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section principale */}
      <div className="bg-gray-100 flex-grow py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Comment ça marche</h2>
          <p className="mt-4 text-gray-600">
            Bienvenue sur <span className="font-semibold">Toque en Duel</span>, la plateforme où la cuisine devient un défi ! 
            Participez à des compétitions culinaires passionnantes, relevez des défis autour de différentes spécialités — 
            qu'il s'agisse de cuisine thaïlandaise, mexicaine ou bien d'autres horizons culinaires.
          </p>
          <p className="mt-4 text-gray-600">
            Cette plateforme encourage les utilisateurs à créer et partager des plats qui reflètent leurs traditions et savoir-faire culinaires, tout en découvrant des saveurs uniques et authentiques venant des quatre coins du monde.
          </p>
          <p className="mt-4 text-gray-600">
            Que vous soyez novice ou expert, montrez vos talents, inspirez les autres, et laissez-vous surprendre par la richesse des créations des autres participants !
          </p>
        </div>

        {/* Ajouter l'image */}
        <div className="mt-20 flex justify-center">
        <img src={plat} alt="Plats culinaires" className="w-2/6 h-auto object-cover rounded-lg shadow-lg"/>
    </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>© 2024 Toque en Duel - Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;
