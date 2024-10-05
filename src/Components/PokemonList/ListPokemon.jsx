import styled from "styled-components";
import React from "react";
import PokemonCard from "./CardPokemon";

const PokemonListContainer = styled.div`
  overflow-y: scroll; /* Garante que o conteúdo seja rolável */
  max-height: 95%;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
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
