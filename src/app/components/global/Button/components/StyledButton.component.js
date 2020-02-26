import styled from "styled-components"

const StyledButton =  styled.button`
    background: #FD8623;
    color: white;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-width: 0;
    border-radius: 0.3rem;
    flex-grow: 1;
    font-size: 1rem;
    :hover,:focus{
        background-color: #F97609;
    };
    :active{
        background-color: crimson;
    };
`
export default StyledButton;