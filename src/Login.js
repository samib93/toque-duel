import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function Login({ onLogin }) {
  useEffect(() => {
    // Vérifier que Google Sign-In est bien chargé
    if (window.google) {
      console.log("Google Sign-In script chargé !");
      
      const handleCredentialResponse = (response) => {
        try {
          const userObject = jwtDecode(response.credential); // Utilisation de jwtDecode
          console.log("Utilisateur connecté :", userObject);
          onLogin(userObject); // Appel de onLogin pour stocker l'utilisateur dans l'état
        } catch (error) {
          console.error("Erreur lors du décodage du JWT :", error);
        }
      };

      /* Initialiser Google Sign-In */
      window.google.accounts.id.initialize({
        client_id: "524489779440-7qn934ehcobca35tsvr7acvpdaq998km.apps.googleusercontent.com", // Ton vrai ID client
        callback: handleCredentialResponse,
      });

      /* Rendre le bouton Google Sign-In */
      const googleSignInButton = document.getElementById("googleSignInButton");
      if (googleSignInButton) {
        window.google.accounts.id.renderButton(googleSignInButton, {
          theme: "outline",
          size: "large",
        });
      }
    } else {
      console.error("Le script Google Sign-In n'est pas chargé.");
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
