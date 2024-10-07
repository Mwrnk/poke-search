import styled from "styled-components";

export const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  margin: 10px;
  padding: 10px;
  flex-grow: 1;
`;

export const PokemonDetailsCard = styled.div`
  margin: 10px;
  padding: 10px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const PokemonStyledText = styled.h1`
  font-family: ${(props) => props.$fontFamily || "Inter, sans-serif"};
  font-size: ${(props) => props.$fontSize || "32px"};
  color: ${(props) => props.$color || "#FFFFFF"};
  line-height: 120%;
  font-weight: ${(props) => (props.isBold ? "bold" : "300")};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export const PokemonImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const PokemonLabel = styled.div`
  display: flex;
  flex-direction: column; /* Mudado para coluna para centralizar texto */
  align-items: center; /* Centraliza os itens */
  justify-content: flex-start; /* Centraliza os itens verticalmente */
  background-color: #1c1b1f;
  border-radius: 24px;
  padding: 10px; /* Adiciona padding para espaçamento */
  width: 50%;
  box-shadow: 1px 2px 4px 2px rgb(0.15);
  height: 220px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo */
  background-color: #1c1b1f;
  border-radius: 12px;
  height: auto;
  margin: 10px;
  padding: 0 10px;
`;
export const PokemonTypes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  margin: 10px;
  padding: 10px;
  width: 100%;
  height: 40px;
  align-items: center;
`;

export const PokemonAbilitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se movam para a linha seguinte, se necessário */
  justify-content: center; /* Centraliza as habilidades */
  margin-top: 10px; /* Espaçamento acima do contêiner de habilidades */
`;
export const PokemonAbility = styled(PokemonStyledText)`
  margin: 5px; /* Espaçamento entre as habilidades */
  padding: 5px 10px; /* Espaçamento interno nas habilidades */
  border-radius: 5px; /* Bordas arredondadas */
`;
export const PokemonDetailsIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const typeColors = {
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
