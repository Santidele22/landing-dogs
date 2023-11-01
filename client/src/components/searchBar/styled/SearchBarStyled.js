import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`
export const SearchInput = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.stone800};
  font-size: ${props => props.theme.fontSizes.text};
  border-style: none;
  color:${props => props.theme.colors.stone50};
  &::placeholder {
    color:${props => props.theme.colors.stone50};
  }
`;


