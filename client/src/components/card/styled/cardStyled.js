import styled from "styled-components";

export const CardArticle = styled.article`
  position: relative;
  width: 450px;
  height: 300px;
box-shadow: rgba(255, 255, 255, 0.09) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px;
  margin: 30px auto;
`;

export const CardMain = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CardImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 10;
  image-rendering: high-quality;
  opacity: 0.5;
  &:hover{
  opacity: 0.8;
  transition: .5s all;

  }

`;

export const CardSection = styled.section`
  position: absolute;
  z-index: 100;
  bottom: 89px;
  left: 1rem;
`;

export const CardFooter = styled.footer`
  position: absolute;
  z-index: 100;
  bottom: 1rem;
  left: 0;
  margin: 1rem;
`;
export const Span = styled.span`
color:${props => props.theme.colors.stone50};
font-size: ${props => props.theme.fontSizes.bigText};
` 
