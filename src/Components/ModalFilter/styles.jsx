import styled from "styled-components";

export const ModalIconTipo = styled.img`
  width: 64px;
  height: 64px;
  transition: transform 0.3 ease;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;
export const Icon = styled.img`
  width: ${(props) => props.$iconW || "24px"};
  height: ${(props) => props.$iconH || "24px"};
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 38px;
  border-radius: 40px;
  width: 80%;
  max-width: 460px;
  max-width: auto;
  height: auto;
  white-space: normal;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const ModalCloseButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 32px;
  height: 32px;

  transition: transform 0.3 ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalHeader = styled.div`
  padding: 20px;
  padding-right: 0;
  display: flex;
  justify-content: flex-end;
`;

export const ModalFooter = styled.div`
  padding: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalH1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 72px;
  line-height: 120%;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`;

export const ModalFilterLabel = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModalParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 140%;
  font-weight: bold;
  margin: 10px;
`;

export const ModalContainerTipos = styled.div`
  background-color: #f3edf7;
  border-radius: 16px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr); /* Cria 6 colunas de igual largura */
  grid-template-rows: repeat(3, auto); /* Cria 3 linhas automáticas */
  gap: 10px; /* Espaçamento entre os ícones */
  padding: 16px; /* Espaçamento interno */
  width: auto; /* Ajusta a largura para 100% do container pai */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
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
