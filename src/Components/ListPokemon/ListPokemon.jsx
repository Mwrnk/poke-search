import React from "react";
import PokemonCard from "../CardPokemon/CardPokemon";
import { PokemonListContainer } from "./styles";

const ListaPokemon = ({ pokemons, onPokemonClick }) => {
  return (
    <PokemonListContainer>
      {pokemons.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onPokemonClick(index)} // Passa o índice ao clicar
        />
      ))}
    </PokemonListContainer>
  );
};

export default ListaPokemon;
