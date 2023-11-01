import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

export const StyledPaginate = styled(ReactPaginate)`
display: flex;
justify-content: center;
gap: 1rem;
margin: 0 auto;
font-size: ${props => props.theme.fontSizes.subtitle};
color:${props => props.theme.colors.stone50};
list-style: none;
cursor: pointer;

li {
    &:hover {
      text-decoration: none;
    }

    &.active {
      text-decoration: underline;
    }
  }
`
