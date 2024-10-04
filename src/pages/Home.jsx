import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container/Container";
import { Searchbar } from "../Components/SearchBar/Searchbar";
import Sidebar from "../Components/SideBar/Sidebar";
import ListaPokemon from "../Components/PokemonList/ListPokemon";
import Section from "../Components/MainContent/Maincontent";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null);

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    getDetailPokemon();
  }, [pokemons]);

  const handlePokemonClick = (index) => {
    console.log("Pokemon clicado:", index);
    setSelectedPokemonIndex(index); // Atualiza o índice do Pokémon selecionado
  };

  const getPokemons = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`
    );

    setPokemons(response.data.results);
  };

  const getDetailPokemon = async () => {
    const promises = [];

    for (const pokemon of pokemons) {
      promises.push(axios.get(`${pokemon.url}`));
    }

    const response = await Promise.all(promises);

    const results = response.map((response) => response.data);

    setDetailPokemon(results);
  };

  const handleSetSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const searchedPokemons = detailPokemon.filter((pokemon) =>
    pokemon.name.includes(searchQuery)
  );

  const selectedPokemon =
    selectedPokemonIndex !== null ? pokemons[selectedPokemonIndex] : null;

  return (
    <>
      <Container>
        <Sidebar>
          <Searchbar functionSearch={handleSetSearchQuery} />
          <ListaPokemon
            pokemons={searchedPokemons}
            onPokemonClick={handlePokemonClick}
          />
        </Sidebar>
        {selectedPokemonIndex !== null && <Section pokemon={selectedPokemon} />}
      </Container>
    </>
  );
};
