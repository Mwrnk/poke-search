import React from 'react';
import PokemonCard from '../CardPokemon/CardPokemon';
import { PokemonListContainer } from './styles';

const ListaPokemon = React.memo(({ pokemons, onPokemonClick }) => {
  return (
    <PokemonListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id || pokemon.name} // ✅ Key única baseada no ID
          pokemon={pokemon}
          onClick={() => onPokemonClick(pokemon)}
        />
      ))}
    </PokemonListContainer>
  );
});

ListaPokemon.displayName = 'ListaPokemon';

export default ListaPokemon;
