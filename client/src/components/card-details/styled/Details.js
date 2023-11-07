import styled from "styled-components";
export const DetailNavbar = styled.nav`
  position: relative;
  text-align: center;
  background-color: ${(props) => props.theme.colors.stone50};
  height: 100px;
  width: 100%;
  margin: 30px 0 0 0 ;
  a {
    position: absolute;
    top: 8px;
    left: 26px;
    background-color: ${(props) => props.theme.colors.stone800};
    color: ${(props) => props.theme.colors.stone100};
    font-size: ${(props) => props.theme.fontSizes.subtitle};
  }
  h1 {
    color: ${(props) => props.theme.colors.stone900};
  }
`;
export const DetailMain = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.stone800};
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  text-align: center;

`;
export const DetailArticle = styled.article`
  width: 883px;
  max-height: 859px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.stone200};
  border: 3px solid #000;
  gap: 1rem;
  margin: 80px auto;
  padding: 1rem;
  border-radius: 1rem;
  h1 {
    font-size: ${(props) => props.theme.fontSizes.subtitle};
  }
  li, span {
  color: ${(props) => props.theme.colors.stone800};
  font-size: ${(props) => props.theme.fontSizes.text};


  }
`;
export const DetailPicture = styled.picture`
  width: 100%;
`;
export const DetailSectionContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
export const DetailSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
  justify-content: space-evenly;
`;
