import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Container from '../Components/Container/Container';
import { Searchbar } from '../Components/SearchBar/Searchbar';
import Sidebar from '../Components/SideBar/Sidebar';
import ListaPokemon from '../Components/ListPokemon/ListPokemon';
import Body from '../Components/Body/Body';
import Header from '../Components/Header/Header';
import PokemonSection from '../Components/PokemonDetails/PokemonDetails';
import Pagination from '../Components/Pagination/Pagination';
import FilterStats from '../Components/FilterStats/FilterStats';
import { PokemonListSkeleton } from '../Components/LoadingSkeleton/LoadingSkeleton';
import { usePokemonFilters } from '../hooks/usePokemonFilters';
import usePagination from '../hooks/usePagination';

export const Pokesearch = () => {
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [error, setError] = useState(null);

  // Hook de paginação
  const { currentPage, totalPages, itemsPerPage, loading, setLoading, goToPage } = usePagination();

  // Hook de filtros otimizados
  const { filteredPokemons, filterStats } = usePokemonFilters(
    detailPokemon,
    searchQuery,
    selectedType
  );

  // Função para limpar todos os filtros
  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedType(null);
  }, []);

  // Função para buscar Pokémon com paginação
  const fetchPokemonsPage = useCallback(
    async (page = 0) => {
      setLoading(true);
      setError(null);
      try {
        const offset = page * itemsPerPage;
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${offset}`
        );

        // Buscar detalhes de todos os Pokémon da página atual
        const detailPromises = response.data.results.map((pokemon) =>
          axios.get(pokemon.url).catch((error) => {
            console.error(`Erro ao buscar detalhes de ${pokemon.name}:`, error);
            return null;
          })
        );

        const detailResponses = await Promise.all(detailPromises);
        const validResults = detailResponses.filter((res) => res !== null);
        const pokemonData = validResults.map((res) => res.data);

        setDetailPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
        setError('Erro ao buscar a lista de Pokémon.');
        setLoading(false);
      }
    },
    [itemsPerPage, setLoading]
  );

  // Função para mudar de página
  const handlePageChange = useCallback(
    (page) => {
      goToPage(page);
      fetchPokemonsPage(page);
      setSelectedPokemonIndex(null); // Limpar seleção ao mudar página
    },
    [goToPage, fetchPokemonsPage]
  );

  // Carregar primeira página
  useEffect(() => {
    fetchPokemonsPage(0);
  }, [fetchPokemonsPage]);

  const handlePokemonClick = (pokemon) => {
    console.log('Pokemon clicado:', pokemon);
    setSelectedPokemonIndex(pokemon);
  };

  const handleSetSearchQuery = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const searchedPokemons = filteredPokemons;

  const selectedPokemon = selectedPokemonIndex;

  return (
    <>
      <Container>
        <Header />
        <Body>
          <Sidebar>
            <Searchbar functionSearch={handleSetSearchQuery} onTypeSelect={setSelectedType} />

            {/* Estatísticas de filtro */}
            {!loading && detailPokemon.length > 0 && (
              <FilterStats
                total={detailPokemon.length}
                filtered={filteredPokemons.length}
                hasFilters={filterStats.isFiltered}
                onClearFilters={handleClearFilters}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}

            {/* Exibe skeleton durante o carregamento */}
            {loading ? (
              <PokemonListSkeleton count={itemsPerPage} />
            ) : error ? (
              <p style={{ textAlign: 'center', color: 'red', padding: '20px' }}>{error}</p>
            ) : searchedPokemons.length > 0 ? (
              <>
                <ListaPokemon pokemons={searchedPokemons} onPokemonClick={handlePokemonClick} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  loading={loading}
                />
              </>
            ) : (
              <p style={{ textAlign: 'center', padding: '20px' }}>Nenhum Pokémon encontrado!</p>
            )}
          </Sidebar>

          <PokemonSection pokemon={selectedPokemon} />
        </Body>
      </Container>
    </>
  );
};

export default Pokesearch;
