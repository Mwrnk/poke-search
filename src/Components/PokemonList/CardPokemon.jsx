import React, { useState } from "react";
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
`;

const PokemonType = styled.p`
  margin: 0;
  font-size: 1.5em;
  color: black;
`;

const PokemonCard = ({ name, image, type }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <PokemonCardContainer
      isPressed={isPressed}
      onMouseDown={() => setIsPressed(true)} // Define isPressed como true ao pressionar
      onMouseUp={() => setIsPressed(false)} // Define isPressed como false ao soltar
      onMouseLeave={() => setIsPressed(false)} // Garante que a animação volte se o mouse sair enquanto pressionado
    >
      <PokemonImage src={image} alt={name} />
      <div>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
