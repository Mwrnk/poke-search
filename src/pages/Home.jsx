import styled from "styled-components";
import React from "react";
import pokemon from "../assets/pokemon.svg";
import githubIcon from "../assets/github-mark.svg";
import { Button } from "../Components/SearchBar/Searchbar";
import pokemonImage from "../assets/charizard.gif";
import { useNavigate } from "react-router-dom"; // Adicione esta linha no topo do arquivo

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  max-width: 100%;
  background-color: #ffffff;
`;

const StyledText = styled.h1`
  font-family: ${(props) => props.fontFamily || "Inter, sans-serif"};
  font-size: ${(props) => props.fontSize || "72px"};
  line-height: 120%;
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.textColor || "black"};
  margin: 10px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3); /* Ajuste os valores conforme necessário */
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: ${(props) => props.height || "32px"};
  width: ${(props) => props.width || "32px"};
`;

const GithubSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const SectionImage = styled.img`
  max-width: 45%;
  height: auto;
`;

const Footer = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

export const Home = () => {
  const navigate = useNavigate(); // Crie uma instância de useNavigate

  const handleButtonClick = () => {
    navigate("/pokesearch"); // Navegue para a página de busca
  };
  return (
    <Container>
      <Header>
        <Logo width="284" height="101" src={pokemon}></Logo>

        <GithubSection>
          <Logo width="45" height="45" src={githubIcon} />
          <StyledText
            fontSize="16px"
            fontFamily="Roboto Mono, monospace"
            fontWeight="regular"
          >
            github.com/Mwrnk/poke-search
          </StyledText>
        </GithubSection>
      </Header>
      <Body>
        <SectionText>
          <StyledText>
            Temos que<br></br> Buscar Todos!
          </StyledText>
          <StyledText fontSize="32" fontWeight="300">
            Busque, filtre e favorite mais de cem Pokémon.
          </StyledText>
          <Button $bgColor="black" onClick={handleButtonClick}>
            Use Agora
          </Button>
        </SectionText>
        <SectionImage src={pokemonImage} alt="Pokémon" />
      </Body>

      <Footer>
        <StyledText
          fontSize="16px"
          fontFamily="Roboto Mono, monospace"
          fontWeight="400"
        >
          © 2024 Mateus Werneck, Tiago Malaquias e Pedro Marazo. Este projeto é
          uma obra independente e não está associado, patrocinado ou endossado
          pela Nintendo, Game Freak ou Creatures. Todos os direitos reservados
          aos respectivos proprietários.
        </StyledText>
      </Footer>
    </Container>
  );
};

export default Home;
