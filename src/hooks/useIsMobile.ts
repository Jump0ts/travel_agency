import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar si la pantalla es de móvil
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Ejecuta la función al cargar
    checkIsMobile();

    // Escucha los cambios en el tamaño de la pantalla
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", checkIsMobile);

    // Limpia el listener al desmontar el componente
    return () => mediaQuery.removeEventListener("change", checkIsMobile);
  }, []);

  return isMobile;
};

export default useIsMobile;
