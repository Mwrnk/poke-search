import React, { useState } from "react";
import {
  PokemonCardContainer,
  PokemonImage,
  PokemonName,
  PokemonType,
} from "./styles";

import { typeColors } from "../MainContent/styles";

const PokemonCard = ({ pokemon, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  // Pegar o primeiro tipo do Pokémon
  const firstType = pokemon.types && pokemon.types[0].type.name;

  // Definir a cor de fundo com base no primeiro tipo ou usar uma cor padrão
  const backgroundColor = typeColors[firstType] || "#434343"; // Cor padrão

  return (
    <PokemonCardContainer
      onClick={onClick}
      isPressed={isPressed}
      onMouseDown={() => setIsPressed(true)} // Define isPressed como true ao pressionar
      onMouseUp={() => setIsPressed(false)} // Define isPressed como false ao soltar
      onMouseLeave={() => setIsPressed(false)} // Garante que a animação volte se o mouse sair enquanto pressionado
    >
      <PokemonImage
        src={pokemon.sprites ? pokemon.sprites.front_default : ""}
        alt={pokemon.name}
        style={{ backgroundColor }}
      />
      <div>
        <PokemonName>{pokemon.name}</PokemonName>
        {pokemon.types ? (
          pokemon.types.map((type, index) => (
            <PokemonType key={index}>{type.type.name}</PokemonType>
          ))
        ) : (
          <PokemonType>Tipo não encontrado</PokemonType>
        )}
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
