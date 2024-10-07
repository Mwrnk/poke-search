import React, { useEffect } from "react";
import {
  typeColors,
  PokemonDetailsContainer,
  PokemonDetailsCard,
  PokemonStyledText,
  PokemonLabel,
  PokemonImage,
  PokemonInfo,
  PokemonTypes,
  PokemonDetailsIcon,
} from "./styles";
import alertIcon from "../../assets/alert.svg";
import arrowIcon from "../../assets/arrow.svg";
import heightIcon from "../../assets/height.svg";
import weightIcon from "../../assets/weight.svg";

const PokemonSection = ({ pokemon }) => {
  useEffect(() => {}, [pokemon]);
  if (!pokemon) return null;

  // Conversão de altura e peso
  const heightInMeters = (pokemon.height / 10).toFixed(1); // converter decímetros para metros
  const weightInKilograms = (pokemon.weight / 10).toFixed(1); // converter hectogramas para quilogramas

  // Criação da string de habilidades
  const abilitiesList = pokemon.abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  return (
    <PokemonDetailsContainer>
      <PokemonLabel>
        <PokemonStyledText
          $fontFamily="Roboto Mono, monospace"
          $fontSize="32px"
          $color="#A6A6A6"
          $margin="20px"
        >
          {`#${pokemon.id}`}
        </PokemonStyledText>
        <PokemonStyledText
          $fontSize="48px"
          $fontFamily="Inter, sans-serif"
          isBold
          style={{ textTransform: "uppercase" }}
        >
          {pokemon.name}
        </PokemonStyledText>
        <PokemonTypes>
          {pokemon.types.map((type, index) => {
            const color = typeColors[type.type.name] || "#434343";
            return (
              <PokemonStyledText
                key={index}
                $fontSize="45px"
                $fontFamily="Roboto Mono, monospace"
                $margin="10px"
                $color={color}
              >
                {`${type.type.name.toUpperCase()} `}
              </PokemonStyledText>
            );
          })}
        </PokemonTypes>
      </PokemonLabel>
      <PokemonDetailsCard>
        <PokemonImage
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </PokemonDetailsCard>
      {/* HABILIDADES */}
      <PokemonInfo>
        <PokemonDetailsIcon src={alertIcon} />
        <PokemonStyledText $margin="10px" isBold>
          Habilidades
        </PokemonStyledText>
        <PokemonDetailsIcon src={arrowIcon} />
        <PokemonStyledText $margin="16px" $fontSize="16px">
          {abilitiesList}
        </PokemonStyledText>
      </PokemonInfo>

      {/* PESO */}
      <PokemonInfo>
        <PokemonDetailsIcon src={heightIcon} />
        <PokemonStyledText $margin="10px" isBold>
          Peso
        </PokemonStyledText>
        <PokemonDetailsIcon src={arrowIcon} />

        <PokemonStyledText $margin="10px" $fontSize="16px">
          {weightInKilograms} kg
        </PokemonStyledText>
      </PokemonInfo>

      {/* ALTURA */}
      <PokemonInfo>
        <PokemonDetailsIcon src={weightIcon} />
        <PokemonStyledText $margin="10px" isBold>
          Altura
        </PokemonStyledText>
        <PokemonDetailsIcon src={arrowIcon} />

        <PokemonStyledText $margin="10px" $fontSize="16px">
          {heightInMeters} metros
        </PokemonStyledText>
      </PokemonInfo>
    </PokemonDetailsContainer>
  );
};

export default PokemonSection;
