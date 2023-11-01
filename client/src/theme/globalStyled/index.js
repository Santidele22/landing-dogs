import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${props => props.theme.colors.stone50};
  }
  a{
    text-decoration: none;
  }
  button{
    border-style: none;
  }
  h1{
    color: ${(props) => props.theme.colors.stone950};
    font-size: ${(props) => props.theme.fontSizes.bigTitle};
  }
  p{
    color:${(props) => props.theme.colors.stone900};
    font-size: ${(props) => props.theme.fontSizes.text};
    line-height: 1.2;
  }
  span{
color:${(props) => props.theme.colors.stone50};
    font-size: ${(props) => props.theme.fontSizes.text};
  }
 button{
  padding: 1rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.stone50};;
  background: ${(props) => props.theme.colors.stone800};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.text};
 }
 button:hover{
    transition: .9s all;
    background: ${(props) => props.theme.colors.stone600};
 }
  select{
    width: 70%;
    min-width: 70%;
    max-width: 70%;
  padding: 1rem;
  border-radius: 1rem;
  border-style: none;
  color: ${(props) => props.theme.colors.stone900};
  background: ${(props) => props.theme.colors.stone200};
  font-size: ${(props) => props.theme.fontSizes.text};
  cursor: pointer;
  margin: 0.5rem 0;
  }
`;

export default GlobalStyles;
