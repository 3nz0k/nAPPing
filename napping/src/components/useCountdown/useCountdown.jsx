import { useState, useEffect, useRef } from 'react';

export default function useCountdown(minutes, onComplete) {

  /**
   * Etat qui permet de stocker le nombre de secondes restantes
   */
  const [secondsLeft, setSecondsLeft] = useState(0);

  /**
   * Référence vers l'interval (permet de le stopper plus tard, par exemple)
   * Persmet de ne pas redessiner le composant à chaque re-render
   */
  const intervalRef = useRef(null);

  useEffect(() => {
    setSecondsLeft(minutes * 60)
  }, [minutes])

  /**
   * Fonction qui débute le timer
   */
  const start = () => {
    // si interval déjà démarré, on interrompt la fonction "start"
    if (intervalRef.current) {
      return;
    }

    // création d'un nouvel intervalle
    // la fonction "setInterval(<callback, <délais>)" est native et permet de déclencher une fonction "callback" automatiquement
    // en fonction d'un intervalle
    // Ici, la callback de la fonctionn "setInterval" permet de gérer le cas où le time doit s'arrêter
    intervalRef.current = setInterval(() => {

      // on appelle le "setter" de l'état qui correspond au temps restant
      // Remarque : le setter ne prend pas directement la nouvelle valeur mais une fonction de mise à jour
      // plus d'explication ici : https://fr.react.dev/reference/react/useState#setstate
      setSecondsLeft(prev => {
        
        // si il n'y a plus de secondes restantes
        if (prev <= 1) {
          // on stoppe l'interval
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          // on appelle la fonction de fin
          onComplete();
          return 0;
        }

        // dans le cas contraire on diminue de 1 la valeur du timer
        return prev - 1;
      });
    }, 1000);
  };

  /**
   * Fonction qui stoppe le timer
   */
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // userEffect qui se déclenchera au chargement du composant
  useEffect(() => {

    // la fonction renvoyée se déclenchera à la destruction du composant
    return () => clearInterval(intervalRef.current);
  }, []);

  // on renvoie un Json qui contient 3 éléments :
  // - le nombre de secondes restantes
  // - la fonction "start" qui peut être appelée par le composant parent
  // - la fonction "stop" qui peut également être appelée par le composant parent
  return { secondsLeft, start, stop };
}