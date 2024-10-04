import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #dedede;
  align-items: center;
  justify-content: center;
`;

const PokemonImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokemonStyledText = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.$fontSize || "32px"};
  color: ${(props) => props.$color || "#FFFFFF"};
  line-height: 120%;
  font-weight: ${(props) => (props.isBold ? "bold" : "300")};
  margin: 10px;
`;

const PokemonType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
  max-width: 20px;
`;
const PokemonAbility = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const PokemonDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  background-color: ${(props) => props.$bgColor || "transparent"};
`;
const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040B0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#F0B6B6",
};
const PokemonSection = ({ pokemon }) => {
  useEffect(() => {
    axios.get(pokemon.url).then((pokemon) => {
      console.log("pokemon: ", pokemon);
      setPokemonSelected(pokemon.data);
    });
  }, [pokemon]);

  const [pokemonSelected, setPokemonSelected] = useState(pokemon);

  const firstType = pokemonSelected.types && pokemonSelected.types[0].type.name;
  const backgroundColor = firstType
    ? typeColors[firstType] || "#434343"
    : "#434343"; // Cor padrão se o tipo não for encontrado

  return (
    <MainContent>
      <PokemonDetailsCard $bgColor={backgroundColor}>
        <PokemonImage
          src={
            pokemonSelected.sprites === undefined
              ? ""
              : pokemonSelected.sprites.other.home.front_default
          }
        />
        <PokemonStyledText isBold $fontSize="72px" $color="434343">
          {pokemon.name.toUpperCase()}
        </PokemonStyledText>
        <PokemonStyledText $fontSize="32px" $color="434343">
          {`#${String(pokemonSelected.id).padStart(3, "0")}`}
        </PokemonStyledText>

        <PokemonType>
          {pokemonSelected.types ? (
            pokemonSelected.types.map((type, index) => (
              <PokemonStyledText key={index} $fontSize="32px" isBold>
                {type.type.name.toUpperCase()}
              </PokemonStyledText>
            ))
          ) : (
            <PokemonStyledText>Tipo não encontrado</PokemonStyledText>
          )}
        </PokemonType>

        <PokemonAbility>
          {pokemonSelected.abilities ? (
            pokemonSelected.abilities.map((habilidade, index) => (
              <PokemonStyledText $color="434343" key={index}>
                {habilidade.ability.name}
              </PokemonStyledText>
            ))
          ) : (
            <PokemonStyledText>Habilidade não encontrado</PokemonStyledText>
          )}
        </PokemonAbility>
      </PokemonDetailsCard>
    </MainContent>
  );
};

export default PokemonSection;
