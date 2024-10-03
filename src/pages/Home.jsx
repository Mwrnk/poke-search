import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container/Container";
import { Searchbar } from "../Components/SearchBar/Searchbar";
import Sidebar from "../Components/SideBar/Sidebar";
import ListaPokemon from "../Components/PokemonList/ListPokemon";

export const Home = () => {
  };

  return (
    <>
      <Container>
        <Sidebar>
          <Searchbar></Searchbar>
        </Sidebar>
      </Container>
    </>
  );
};
