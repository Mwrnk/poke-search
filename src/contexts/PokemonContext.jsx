import React, { createContext, useContext, useReducer, useCallback } from 'react';
import axios from 'axios';

const PokemonContext = createContext();

const initialState = {
  pokemons: [],
  detailPokemon: [],
  selectedPokemon: null,
  selectedType: null,
  searchQuery: '',
  loading: false,
  error: null,
  currentPage: 0,
  hasMorePokemon: true,
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload, loading: false };
    case 'SET_DETAIL_POKEMON':
      return { ...state, detailPokemon: action.payload, loading: false };
    case 'SET_SELECTED_POKEMON':
      return { ...state, selectedPokemon: action.payload };
    case 'SET_SELECTED_TYPE':
      return { ...state, selectedType: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'INCREMENT_PAGE':
      return { ...state, currentPage: state.currentPage + 1 };
    default:
      return state;
  }
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const setLoading = useCallback((loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const fetchPokemons = useCallback(
    async (page = 0, limit = 20) => {
      setLoading(true);
      try {
        const offset = page * limit;
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        );
        dispatch({ type: 'SET_POKEMONS', payload: response.data.results });
        return response.data.results;
      } catch (error) {
        setError('Erro ao buscar a lista de Pokémon.');
        throw error;
      }
    },
    [setLoading, setError]
  );

  const fetchDetailPokemon = useCallback(
    async (pokemonUrls) => {
      setLoading(true);
      try {
        const promises = pokemonUrls.map((url) =>
          axios.get(url).catch((error) => {
            console.error(`Erro ao buscar detalhes:`, error);
            return null;
          })
        );
        const response = await Promise.all(promises);
        const validResults = response.filter((res) => res !== null);
        const pokemonData = validResults.map((res) => res.data);
        dispatch({ type: 'SET_DETAIL_POKEMON', payload: pokemonData });
        return pokemonData;
      } catch (error) {
        setError('Erro ao buscar detalhes dos Pokémon.');
        throw error;
      }
    },
    [setLoading, setError]
  );

  const setSelectedPokemon = useCallback((pokemon) => {
    dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemon });
  }, []);

  const setSelectedType = useCallback((type) => {
    dispatch({ type: 'SET_SELECTED_TYPE', payload: type });
  }, []);

  const setSearchQuery = useCallback((query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query.toLowerCase() });
  }, []);

  const value = {
    ...state,
    fetchPokemons,
    fetchDetailPokemon,
    setSelectedPokemon,
    setSelectedType,
    setSearchQuery,
    setLoading,
    setError,
  };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon deve ser usado dentro de PokemonProvider');
  }
  return context;
};
