import { useState } from "react";
import styled from "styled-components";
import searchIcon from "../../assets/search.svg";
import filterIcon from "../../assets/filter.svg";
import closeIcon from "../../assets/close.svg";
import brightnessIcon from "../../assets/brightness.svg";

require.context("../../assets/iconTipos/", false, /\.(png|jpe?g|svg)$/);

function importAll(r) {
  let iconTipos = {};
  r.keys().forEach((item, index) => {
    iconTipos[item.replace("./", "")] = r(item);
  });
  return iconTipos;
}
const iconTipos = importAll(
  require.context("../../assets/iconTipos/", false, /\.(png)$/)
);

const SearchBar = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
const Input = styled.input`
  padding: 0.875rem;
  font-size: 1rem;
  outline: none;
  margin: 0;
  border: none;
  background-color: #f2f2f2;
`;
const Icon = styled.img`
  width: ${(props) => props.$iconW || "24px"};
  height: ${(props) => props.$iconH || "24px"};
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${(props) => props.$bgColor || "#FFFFFF"};
  color: ${(props) => props.$buttonColor || "#FFFFFF"};
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: bold;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao botão */
  transition: transform 0.3s ease, background-color 0.3s ease; /* Transições para hover */

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do botão */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Aumenta a sombra ao passar o mouse */
  }
`;

const ModalIconTipo = styled.img`
  width: 64px;
  height: 64px;
  transition: transform 0.3 ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
const Modal = styled.div`
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

const ModalContent = styled.div`
  background: white;
  padding: 38px;
  border-radius: 40px;
  width: 80%;
  max-width: 460px;
  max-width: auto;
  height: auto;
  white-space: normal;
`;

const ModalCloseButton = styled.button`
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

const ModalHeader = styled.div`
  padding: 20px;
  padding-right: 0;
  display: flex;
  justify-content: flex-end;
`;

const ModalFooter = styled.div`
  padding: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalH1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 72px;
  line-height: 120%;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`;

const ModalFilterLabel = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ModalParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 140%;
  font-weight: bold;
  margin: 10px;
`;

const ModalContainerTipos = styled.div`
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

export const Searchbar = ({ functionSearch }) => {
  const [pokemonBuscado, setPokemonBuscado] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const onChangePokemonBuscado = (event) => {
    setPokemonBuscado(event.target.value);
    functionSearch(event.target.value);
  };

  return (
    <>
      <SearchBar>
        <Icon src={searchIcon} />
        <Input
          type="text"
          placeholder="Buscar Pokémon..."
          maxLength={12}
          onChange={(event) => onChangePokemonBuscado(event)}
          value={pokemonBuscado}
        ></Input>
        <Button onClick={handleOpenModal} $bgColor="none">
          <Icon src={filterIcon} />
        </Button>
      </SearchBar>
      {modalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton onClick={handleCloseModal}>
                <Icon src={closeIcon} $iconH="32px" $iconW="32px" />
              </ModalCloseButton>
            </ModalHeader>
            <ModalH1>Filtre os Pokémon</ModalH1>
            <ModalFilterLabel>
              <Icon src={brightnessIcon} />
              <ModalParagraph>Tipos</ModalParagraph>
            </ModalFilterLabel>
            <ModalContainerTipos>
              {Object.keys(iconTipos).map((key) => (
                <ModalIconTipo key={key} src={iconTipos[key]} alt={key} />
              ))}
            </ModalContainerTipos>

            <ModalFooter>
              <Button $bgColor="#FF4D4D">Resetar</Button>
              <Button $bgColor="#007AFF" onClick={console.log("Pesquisando")}>
                Pesquisar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
