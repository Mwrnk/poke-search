import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  transition: background-color ease 0.25s, transform ease 0.1s; /* Transições */
  cursor: pointer;
  &:hover {
    background-color: #c4c3c3;
  }

  transform: ${({ isPressed }) =>
    isPressed ? "scale(0.95)" : "scale(1)"}; /* Reduz o tamanho ao clicar */
`;

export const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  background-color: red;
  border-radius: 15px;
`;

export const PokemonName = styled.h3`
  margin: 0;
  font-size: 32px;
  white-space: nowrap; /* Evita que o texto quebre em múltiplas linhas */
  overflow: hidden; /* Oculta o texto que transborda */
  text-overflow: ellipsis; /* Adiciona "..." no final se o texto for muito longo */
  color: #1c1b1f;
  font-family: Roboto, sans-serif;
`;

export const PokemonType = styled.p`
  margin: 0;
  font-size: 16px;
  color: #1c1b1f;
`;
