import styled from "styled-components";
export const HomeContainer = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  `;

export const Article = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  text-align: center;
  width: 70%;
  /* border: 3px solid #000; */
`;

export const Header = styled.header`
  display: flex;
  flex-flow: column wrap;
  overflow: hidden;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
`;
export const Footer = styled.footer`
  width: 100%;
  margin: 1rem 0;
`;
