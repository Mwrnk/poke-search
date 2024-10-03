import React, { useState } from "react";
import styled from "styled-components";

const PokemonCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #e0e0e0;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #c4c3c3;
  }

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

  return (
    <PokemonCardContainer
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
