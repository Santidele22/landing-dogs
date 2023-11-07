import styled from 'styled-components'
export const FormMain = styled.main`
width:100vw;
display: flex;
background-color: ${props => props.theme.colors.stone800};
`

export const StyledForm = styled.form`
width: 550px;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
gap: 1rem;
margin: 80px auto;
border:3px solid #000;
border-radius: 1rem;
padding: 1rem;
background-color: ${props => props.theme.colors.stone50};
color: ${props => props.theme.colors.stone900};


label{
    font-size: ${props => props.theme.fontSizes.subtitle};
}
input{
    width: 70%;
    padding: 1rem;
    border-radius: .5rem;
color: ${props => props.theme.colors.stone50};
background-color: ${props => props.theme.colors.stone800};
font-size: ${props => props.theme.fontSizes.text};
margin: 0 auto;

}

select{
    min-width: 90%;
    padding: 1rem;
    border-radius: 1rem;
    border-style: none;
    color: #1c1917;
    font-size: 1.2rem;
    cursor: pointer;
background-color: ${props => props.theme.colors.stone800};
color: ${props => props.theme.colors.stone50};

    font-size: ${props => props.theme.fontSizes.text};
    margin: 0 auto;

}

`
export const SectionForm = styled.section`
width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    gap: 1.2rem;
    text-align: center;
    button{
        width:100%
    }
`