import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container/Container";
import { Searchbar } from "../Components/SearchBar/Searchbar";
import Sidebar from "../Components/SideBar/Sidebar";
import ListaPokemon from "../Components/PokemonList/ListPokemon";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`)

    setPokemons(response.data.results)
  };

  return (
    <>
      <Container>
        <Sidebar>
          <Searchbar></Searchbar>
          <ListaPokemon pokemons={pokemons}></ListaPokemon>
        </Sidebar>
      </Container>
    </>
  );
};
