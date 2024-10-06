import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  padding: 10px;
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 245px;
  height: 50px;
  padding-left: 26px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao botão */
`;

export const Input = styled.input`
  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 8px; /* Ajuste conforme necessário */
`;

export const Icon = styled.img`
  width: ${(props) => props.$iconW || "24px"};
  height: ${(props) => props.$iconH || "24px"};
`;

export const Button = styled.button`
  border: none;
  border-radius: 7px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  background-color: ${(props) => props.$bgColor || "#FFFFFF"};
  color: ${(props) => props.$buttonColor || "#FFFFFF"};
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: inline-block;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao botão */
  transition: transform 0.3s ease, background-color 0.3s ease; /* Transições para hover */

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do botão */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Aumenta a sombra ao passar o mouse */
  }
`;
