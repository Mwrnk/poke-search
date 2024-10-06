import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import filterIcon from "../../assets/filter.svg";
import { ModalFilter } from "../ModalFilter/ModalFilter";
import { SearchBar, SearchInput, Input, Button, Icon } from "./styles";

export const Searchbar = ({ functionSearch, onTypeSelect }) => {
  const [pokemonBuscado, setPokemonBuscado] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const onChangePokemonBuscado = (event) => {
    setPokemonBuscado(event.target.value);
    functionSearch(event.target.value); // Passa o valor buscado para o pai
  };

  return (
    <>
      <SearchBar>
        <SearchInput>
          <Icon src={searchIcon} />
          <Input
            type="text"
            placeholder="Buscar Pokémon..."
            maxLength={12}
            onChange={onChangePokemonBuscado}
            value={pokemonBuscado}
          />
        </SearchInput>
        <Button onClick={handleOpenModal}>
          <Icon $iconW="24px" $iconH="24px" src={filterIcon} />
        </Button>
      </SearchBar>

      {modalOpen && (
        <ModalFilter
          onClose={handleCloseModal} // Fecha o modal
          onTypeSelect={onTypeSelect} // Passa o tipo selecionado para o pai
        />
      )}
    </>
  );
};
