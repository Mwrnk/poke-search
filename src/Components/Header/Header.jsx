import React from "react";
import { HeaderContainer, Logo, Nav, Text, Icon } from "./styles";
import pokemonLogo from "../../assets/pokemon.svg";
import returnIcon from "../../assets/return.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate(); // Crie uma instância de useNavigate

  const handleButtonClick = () => {
    navigate("/"); // Navegue para a página inicial
  };
  return (
    <HeaderContainer>
      <Logo src={pokemonLogo} onClick={handleButtonClick} />
      <Nav onClick={handleButtonClick}>
        <Icon src={returnIcon} />
        <Text>Voltar para a Tela Inicial</Text>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
