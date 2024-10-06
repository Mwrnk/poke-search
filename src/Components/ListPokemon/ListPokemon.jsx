import React from "react";
import PokemonCard from "../CardPokemon/CardPokemon";
import { PokemonListContainer } from "./styles";

const ListaPokemon = ({ pokemons, onPokemonClick }) => {
  return (
    <PokemonListContainer>
      {pokemons.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          onClick={() => onPokemonClick(pokemon)} // Passa o índice ao clicar
        />
      ))}
    </PokemonListContainer>
  );
};

export default ListaPokemon;
