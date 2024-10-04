import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container/Container";
import { Searchbar } from "../Components/SearchBar/Searchbar";
import Sidebar from "../Components/SideBar/Sidebar";
import ListaPokemon from "../Components/PokemonList/ListPokemon";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [detailPokemon, setDetailPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  
  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    getDetailPokemon()
  }, [pokemons]);

  const getPokemons = async () => {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`)

    setPokemons(response.data.results)
  };

  const getDetailPokemon = async () => {
    const promises = []
    
    for(const pokemon of pokemons) {
      promises.push(
        axios.get(`${pokemon.url}`)
      )
    }

    const response = await Promise.all(promises)

    const results = response.map(response => response.data)

    setDetailPokemon(results)
  }

  const handleSetSearchQuery = (query) => {
    setSearchQuery(query)
  }

  const searchedPokemons = detailPokemon.filter(pokemon => pokemon.name.includes(searchQuery))

  return (
    <>
      <Container>
        <Sidebar>
          <Searchbar 
            functionSearch={handleSetSearchQuery}
          />

          <ListaPokemon 
            pokemons={searchedPokemons}
          />
        </Sidebar>
      </Container>
    </>
  );
};
