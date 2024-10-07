import styled from "styled-components";

export const Container = styled.div`
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

export const StyledText = styled.h1`
  font-family: ${(props) => props.fontFamily || "Inter, sans-serif"};
  font-size: ${(props) => props.fontSize || "72px"};
  line-height: 120%;
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.textColor || "black"};
  margin: 10px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
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

export const Logo = styled.img`
  height: ${(props) => props.height || "32px"};
  width: ${(props) => props.width || "32px"};
`;

export const GithubSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: fit-content;
  margin: 40px;
`;

export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  max-width: 70%;
`;

export const SectionImage = styled.img`
  max-width: 90%;
  height: auto;
`;

export const Footer = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;
