import React from 'react';

const challenges = [
  { day: 'Lundi', challenge: 'Cuisine Mexicaine' },
  { day: 'Mardi', challenge: 'Cuisine Thaïlandaise' },
  { day: 'Mercredi', challenge: 'Cuisine Italienne' },
  { day: 'Jeudi', challenge: 'Cuisine Japonaise' },
  { day: 'Vendredi', challenge: 'Cuisine Indienne' },
  { day: 'Samedi', challenge: 'Cuisine Méditerranéenne' },
  { day: 'Dimanche', challenge: 'Cuisine Américaine' },
];

const CulinaryChallengeCalendar = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6">Calendrier des Défis Culinaires</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold mb-2">{challenge.day}</h3>
            <p className="text-lg font-medium text-gray-600">Défi : <span className="text-teal-600">{challenge.challenge}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulinaryChallengeCalendar;
