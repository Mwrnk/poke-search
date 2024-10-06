import styled from "styled-components";
export const PokemonListContainer = styled.div`
  max-height: calc(100vh - 80px); /* Ajuste para não ocupar a altura total */
  overflow-y: auto; /* Garante que o conteúdo seja rolável */
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  /* Esconder a scrollbar no navegador */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
