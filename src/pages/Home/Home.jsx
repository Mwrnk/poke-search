// Home.jsx
import React from "react";
import pokemon from "../../assets/pokemon.svg";
import githubIcon from "../../assets/GitHub.svg";
import pokemonImage from "../../assets/pokemonTrainer.gif";
import { useNavigate } from "react-router-dom";
import {
  Container,
  StyledText,
  Button,
  Header,
  Logo,
  GithubSection,
  GithubLink,
  Body,
  SectionText,
  SectionImage,
  Footer,
} from "./styles"; //

export const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/pokesearch");
  };

  return (
    <Container>
      <Header>
        <Logo width="284" height="101" src={pokemon}></Logo>

        <GithubSection>
          <GithubLink
            href="https://github.com/Mwrnk/poke-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo width="45" height="45" src={githubIcon} />
            <StyledText
              fontSize="16px"
              fontFamily="Roboto Mono, monospace"
              fontWeight="regular"
              textColor="#ffffff"
            >
              github.com/Mwrnk/poke-search
            </StyledText>
          </GithubLink>
        </GithubSection>
      </Header>
      <Body>
        <SectionText>
          <StyledText>
            Temos que<br></br> Buscar Todos!
          </StyledText>
          <StyledText fontSize="32" fontWeight="300">
            Busque e filtre mais de 500 Pokémon!
          </StyledText>
          <Button onClick={handleButtonClick}>Comece a Buscar</Button>
        </SectionText>
        <SectionImage src={pokemonImage} alt="Pokémon" />
      </Body>

      <Footer>
        <StyledText
          fontSize="16px"
          fontFamily="Roboto Mono, monospace"
          fontWeight="400"
        >
          © 2024 Todos os direitos reservados a Pokémon Company.
        </StyledText>
      </Footer>
    </Container>
  );
};

export default Home;
