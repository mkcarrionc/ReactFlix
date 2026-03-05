import { useState, useEffect } from "react";
import { mockPeliculas } from "../data/mockPeliculas";

const usePeliculaSearch = (initialPeliculas = mockPeliculas) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPeliculas, setFilteredPeliculas] = useState(initialPeliculas);
  const [loading, setLoading] = useState(false);

  // Obtener categorías únicas
  const categories = [...new Set(mockPeliculas.map((pelicula) => pelicula.genre))];

  useEffect(() => {
    setLoading(true);

    // Simular retraso de red
    const timer = setTimeout(() => {
      let results = mockPeliculas;

      if (searchTerm) {
        results = results.filter(
          (pelicula) =>
            pelicula.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pelicula.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pelicula.cast.some((actor) =>
              actor.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        );
      }

      if (selectedCategory) {
        results = results.filter((pelicula) => pelicula.genre === selectedCategory);
      }

      setFilteredPeliculas(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredPeliculas,
    loading,
    categories,
  };
};

export default usePeliculaSearch;
