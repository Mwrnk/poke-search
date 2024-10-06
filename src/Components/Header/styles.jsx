import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #1c1b1f;
`;

export const Logo = styled.img`
  width: 150px;
  height: 50px;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do botão */
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  font-family: Roboto Mono, "monospace";
  font-size: 16px;
  color: white;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
