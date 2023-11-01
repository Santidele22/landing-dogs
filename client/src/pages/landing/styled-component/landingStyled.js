import styled from "styled-components";

export const LandingHeader = styled.header`
  display: flex;
  width: 90%;
  height: 150px;
  margin: 1rem auto;
  justify-content: space-evenly;
  flex-flow: column wrap;
  align-items: center;
`;
export const LandingMain = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  background: ${(props) => props.theme.colors.stone900};
`;
export const LandingContainerCards = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
export const LandingContainerFilters = styled.aside`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-height: 100%;
  margin: 2rem auto;
  overflow: hidden;
  text-align: center;
  color: ${(props) => props.theme.colors.stone50};
`;
export const LandingContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.stone800};
  padding: 1rem;
`;
export const Text = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.stone50};
`;
export const SectionAside = styled.section`
  display: flex;
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  /* justify-content: space-evenly; */
  flex-flow: column wrap;
  overflow: hidden;
  margin: 1rem 0;
  font-size: ${props => props.theme.fontSizes.text};
  align-items:center;

`;
