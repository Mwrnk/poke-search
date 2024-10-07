import styled from "styled-components";
import React from "react";
import pokemon from "../assets/pokemon.svg";
import githubIcon from "../assets/GitHub.svg";
import pokemonImage from "../assets/pokemonTrainer.gif";
import { useNavigate } from "react-router-dom"; // Adicione esta linha no topo do arquivo

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
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

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  width: fit-content;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  border-radius: 12px;
  margin-top: 10px;

  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1c1b1f;
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
  width: fit-content;
  margin: 40px;
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  max-width: 70%;
`;

const SectionImage = styled.img`
  max-width: 90%;
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
            textColor="#ffffff"
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
            Busque e filtre mais de 500 Pokémon!
          </StyledText>
          <Button $bgColor="black" onClick={handleButtonClick}>
            Comece a Buscar
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
          © 2024 Todos os direitos reservados a Pokémon Company.
        </StyledText>
      </Footer>
    </Container>
  );
};

export default Home;
