import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.stone800};
  color: ${props => props.theme.colors.stone50};
  font-size: ${(props) => props.theme.fontSizes.text};
  transition: .9s all;
  &:hover{
  background-color: ${props => props.theme.colors.stone600};

  }
`
