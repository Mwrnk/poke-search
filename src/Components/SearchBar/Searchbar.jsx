import { useState } from "react";
import styled from "styled-components";
import searchIcon from "../../assets/search.svg";
import filterIcon from "../../assets/filter.svg";

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
  width: 24px;
  height: 24px;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const Searchbar = ({ functionSearch }) => {
  const [pokemonBuscado, setPokemonBuscado] = useState('')

  const onChangePokemonBuscado = (event) => {
    setPokemonBuscado(event.target.value);
    functionSearch(event.target.value)
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
          <Button>
            <Icon src={filterIcon} />
          </Button>
        </SearchBar>
      </>
    );
}
