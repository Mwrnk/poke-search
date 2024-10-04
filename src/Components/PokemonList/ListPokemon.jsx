import styled from "styled-components";
import React from "react";
import PokemonCard from "./CardPokemon";

const PokemonListContainer = styled.div`
  overflow-y: scroll; /* Garante que o conteúdo seja rolável */
  max-height: 100vh; /* Define a altura máxima */
  border-radius: 5px;
  margin: 0;
  padding-top: 20px;

  /* Esconder a scrollbar no navegador */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* Webkit browsers (Chrome, Safari, etc.) */
  }
`;

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
