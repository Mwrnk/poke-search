import { useState, useCallback } from 'react';
import searchIcon from '../../assets/search.svg';
import filterIcon from '../../assets/filter.svg';
import { ModalFilter } from '../ModalFilter/ModalFilter';
import { SearchBar, SearchInput, Input, Button, Icon } from './styles';

// Hook personalizado para debounce
const useDebounce = (callback, delay) => {
  const [debounceTimer, setDebounceTimer] = useState(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const newTimer = setTimeout(() => {
        callback(...args);
      }, delay);

      setDebounceTimer(newTimer);
    },
    [callback, delay, debounceTimer]
  );

  return debouncedCallback;
};

export const Searchbar = ({ functionSearch, onTypeSelect }) => {
  const [pokemonBuscado, setPokemonBuscado] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalOpen(true), []);
  const handleCloseModal = useCallback(() => setModalOpen(false), []);

  // ✅ Debounce de 300ms para a busca
  const debouncedSearch = useDebounce(functionSearch, 300);

  const onChangePokemonBuscado = useCallback(
    (event) => {
      const value = event.target.value;
      setPokemonBuscado(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  return (
    <>
      <SearchBar>
        <SearchInput>
          <Icon src={searchIcon} />
          <Input
            type="text"
            placeholder="Buscar Pokémon..."
            maxLength={30}
            onChange={onChangePokemonBuscado}
            value={pokemonBuscado}
          />
        </SearchInput>
        <Button onClick={handleOpenModal}>
          <Icon $iconW="24px" $iconH="24px" src={filterIcon} />
        </Button>
      </SearchBar>

      {modalOpen && <ModalFilter onClose={handleCloseModal} onTypeSelect={onTypeSelect} />}
    </>
  );
};
