import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container/Container";
import { Searchbar } from "../Components/SearchBar/Searchbar";
import Sidebar from "../Components/SideBar/Sidebar";
import ListaPokemon from "../Components/ListPokemon/ListPokemon";
import Body from "../Components/Body/Body";
import Header from "../Components/Header/Header";
import PokemonSection from "../Components/PokemonDetails/PokemonDetails";
import ClipLoader from "react-spinners/ClipLoader";
import 
// Estilos para centralizar e aumentar o spinner
const SpinnerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Para centralizar verticalmente
};

export const Pokesearch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) getDetailPokemon();
  }, [pokemons]);

  const handlePokemonClick = (pokemon) => {
    console.log("Pokemon clicado:", pokemon);
    setSelectedPokemonIndex(pokemon);
  };

  const getPokemons = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0`
      );
      setPokemons(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar a lista de Pokémon:", error);
      setError("Erro ao buscar a lista de Pokémon.");
      setLoading(false);
    }
  };

  const getDetailPokemon = async () => {
    setLoading(true);
    try {
      const promises = pokemons.map((pokemon) =>
        axios.get(`${pokemon.url}`).catch((error) => {
          console.error(`Erro ao buscar detalhes de ${pokemon.name}:`, error);
          return null;
        })
      );
      const response = await Promise.all(promises);
      const validResults = response.filter((res) => res !== null);
      setDetailPokemon(validResults.map((res) => res.data));
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar detalhes dos Pokémon:", error);
      setError("Erro ao buscar detalhes dos Pokémon.");
      setLoading(false);
    }
  };

  const handleSetSearchQuery = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const searchedPokemons = detailPokemon.filter((pokemon) => {
    const matchesName = pokemon.name.includes(searchQuery || "");
    const matchesType = selectedType
      ? pokemon.types.some((typeInfo) => typeInfo.type.name === selectedType)
      : true;
    return matchesName && matchesType;
  });

  const selectedPokemon = selectedPokemonIndex;

  return (
    <>
      <Container>
        <Header />
        <Body>
          <Sidebar>
            <Searchbar
              functionSearch={handleSetSearchQuery}
              onTypeSelect={setSelectedType}
            />

            {/* Exibe spinner durante o carregamento */}
            {loading ? (
              <div style={SpinnerContainer}>
                <ClipLoader color={"#123abc"} loading={loading} size={100} />
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : searchedPokemons.length > 0 ? (
              <ListaPokemon
                pokemons={searchedPokemons}
                onPokemonClick={handlePokemonClick}
              />
            ) : (
              <p>Nenhum Pokémon encontrado!</p>
            )}
          </Sidebar>

          <PokemonSection pokemon={selectedPokemon} />
        </Body>
      </Container>
    </>
  );
};

export default Pokesearch;
