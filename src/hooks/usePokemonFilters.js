import { useMemo, useCallback, useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const usePokemonFilters = (pokemons, searchQuery, selectedType) => {
  // Memoização do filtro de busca
  const filteredByName = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      return pokemons;
    }

    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [pokemons, searchQuery]);

  // Memoização do filtro por tipo
  const filteredByType = useMemo(() => {
    if (!selectedType) {
      return filteredByName;
    }

    return filteredByName.filter((pokemon) =>
      pokemon.types?.some(
        (typeInfo) => typeInfo.type.name.toLowerCase() === selectedType.toLowerCase()
      )
    );
  }, [filteredByName, selectedType]);

  // Estatísticas dos filtros
  const filterStats = useMemo(
    () => ({
      total: pokemons.length,
      afterNameFilter: filteredByName.length,
      final: filteredByType.length,
      isFiltered: searchQuery || selectedType,
    }),
    [pokemons.length, filteredByName.length, filteredByType.length, searchQuery, selectedType]
  );

  // Função para limpar todos os filtros
  const clearFilters = useCallback(() => {
    return {
      searchQuery: '',
      selectedType: null,
    };
  }, []);

  return {
    filteredPokemons: filteredByType,
    filterStats,
    clearFilters,
    hasFilters: filterStats.isFiltered,
  };
};

export default usePokemonFilters;
