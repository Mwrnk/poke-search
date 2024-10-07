import React from "react";
import closeIcon from "../../assets/close.svg";
import brightnessIcon from "../../assets/brightness.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalH1,
  ModalFilterLabel,
  ModalParagraph,
  ModalContainerTipos,
  ModalIconTipo,
  ModalFooter,
  Button,
  Icon,
} from "./styles";

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

export const ModalFilter = ({ onClose, onTypeSelect }) => {
  const handleTypeIconClick = (filename) => {
    const type = filename.split("_")[0].toLowerCase(); // Extrai o tipo
    onTypeSelect(type); // Passa o tipo para o Searchbar
    onClose(); // Fecha o modal
  };

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton onClick={onClose}>
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
            <ModalIconTipo
              key={key}
              src={iconTipos[key]}
              alt={key}
              onClick={() => handleTypeIconClick(key)}
            />
          ))}
        </ModalContainerTipos>
        <ModalFooter>
          <Button
            $buttonColor="white"
            $bgColor="#007AFF"
            onClick={() => {
              onTypeSelect(null); // Limpa o filtro
              onClose(); // Fecha o modal
            }}
          >
            Limpar Filtro
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalFilter;
