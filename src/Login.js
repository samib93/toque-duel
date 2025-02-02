import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function Login({ onLogin }) {
  useEffect(() => {
    // Charger dynamiquement le script Google si nécessaire
    const loadGoogleScript = () => {
      if (!document.getElementById("google-script")) {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.id = "google-script";
        script.async = true;
        script.defer = true;
        script.onload = () => initializeGoogleSignIn(); // Initialise après chargement
        document.body.appendChild(script);
      } else {
        initializeGoogleSignIn();
      }
    };

    // Fonction d'initialisation de Google Sign-In
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        console.log("✅ Google Sign-In script chargé !");
        
        window.google.accounts.id.initialize({
          client_id: "524489779440-7qn934ehcobca35tsvr7acvpdaq998km.apps.googleusercontent.com", // Ton vrai ID client
          callback: (response) => {
            try {
              const userObject = jwtDecode(response.credential);
              console.log("✅ Utilisateur connecté :", userObject);
              onLogin(userObject);
            } catch (error) {
              console.error("❌ Erreur JWT :", error);
            }
          },
        });

        // Rendre le bouton Google Sign-In
        const googleSignInButton = document.getElementById("googleSignInButton");
        if (googleSignInButton) {
          window.google.accounts.id.renderButton(googleSignInButton, {
            theme: "outline",
            size: "large",
          });
        }
      } else {
        console.error("❌ Le script Google Sign-In n'est pas encore chargé.");
      }
    };

    // Attendre que la page charge pour exécuter le script
    if (document.readyState === "complete") {
      loadGoogleScript();
    } else {
      window.onload = loadGoogleScript;
    }
  }, [onLogin]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur Toque en Duel</h1>
      <div id="googleSignInButton"></div> {/* Le bouton sera rendu ici */}
    </div>
  );
}

export default Login;
