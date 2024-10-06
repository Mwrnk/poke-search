import React from "react";
import { HeaderContainer, Logo, Nav, Text, Icon } from "./styles";
import pokemonLogo from "../../assets/pokemon.svg";
import returnIcon from "../../assets/return.svg";
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={pokemonLogo} />
      <Nav>
        <Icon src={returnIcon} />
        <Text>Voltar para a Tela Inicial</Text>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
