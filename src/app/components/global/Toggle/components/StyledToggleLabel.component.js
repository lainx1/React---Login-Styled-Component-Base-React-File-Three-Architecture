import styled from 'styled-components'

const StyledToggleLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 3.0rem;
    height: 1.85rem;
    border-radius: 1rem;
    background: #AFAFAF;
    cursor: pointer;    
    &::after{
        content: "";
        display: block;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.15rem;
        background: white;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    };    
    &:hover{
        background: #A3A3A3;
        &::after{
            width: 1.9rem;
            height: 1.9rem;
            margin: 0px;
        };
    };
`
export default StyledToggleLabel