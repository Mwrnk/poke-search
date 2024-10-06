import React, { useState, useEffect } from "react";
import { ListaPokemonContext } from "../../pages/Pokesearch";
import axios from "axios";
import styled from "styled-components";

const PokemonCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #e0e0e0;
  border-radius: 10px;
  transition: background-color ease 0.25s, transform ease 0.1s; /* Transições */
  cursor: pointer;
  &:hover {
    background-color: #c4c3c3;
  }

  transform: ${({ isPressed }) =>
    isPressed ? "scale(0.95)" : "scale(1)"}; /* Reduz o tamanho ao clicar */
`;

const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const PokemonName = styled.h3`
  margin: 0;
  font-size: 1.5em;
  white-space: nowrap; /* Evita que o texto quebre em múltiplas linhas */
  overflow: hidden; /* Oculta o texto que transborda */
  text-overflow: ellipsis; /* Adiciona "..." no final se o texto for muito longo */
`;

const PokemonType = styled.p`
  margin: 0;
  font-size: 1.2em;
  color: black;
`;

const PokemonCard = ({ pokemon, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

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
