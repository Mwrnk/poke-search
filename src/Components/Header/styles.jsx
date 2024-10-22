import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #1c1b1f;

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas menores */
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
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

  @media (max-width: 768px) {
    width: 120px; /* Ajusta o tamanho da logo em telas menores */
    height: auto; /* Mantém a proporção da imagem */
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

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas menores */
    width: 100%; /* Ocupa toda a largura disponível */
    text-align: center; /* Centraliza o texto */
  }
`;

export const Text = styled.p`
  font-family: Roboto Mono, "monospace";
  font-size: 16px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px; /* Ajusta o tamanho do ícone em telas menores */
    height: 20px; /* Mantém a proporção do ícone */
  }
`;
