import { useState, useCallback, useMemo } from 'react';

const ITEMS_PER_PAGE = 20;
const TOTAL_POKEMON = 1000; // Total aproximado de Pokémon na API

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalPages = useMemo(() => Math.ceil(TOTAL_POKEMON / ITEMS_PER_PAGE), []);

  const goToPage = useCallback(
    (page) => {
      if (page >= 0 && page < totalPages && page !== currentPage) {
        setCurrentPage(page);
      }
    },
    [currentPage, totalPages]
  );

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const getOffset = useCallback(
    (page = currentPage) => {
      return page * ITEMS_PER_PAGE;
    },
    [currentPage]
  );

  const isPaginated = useMemo(() => pokemonData.length > 0, [pokemonData.length]);

  return {
    currentPage,
    totalPages,
    itemsPerPage: ITEMS_PER_PAGE,
    pokemonData,
    setPokemonData,
    loading,
    setLoading,
    goToPage,
    nextPage,
    prevPage,
    getOffset,
    isPaginated,
    hasNextPage: currentPage < totalPages - 1,
    hasPrevPage: currentPage > 0,
  };
};

export default usePagination;
