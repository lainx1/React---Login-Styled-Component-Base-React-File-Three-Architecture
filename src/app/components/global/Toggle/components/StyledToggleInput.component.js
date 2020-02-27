import styled from 'styled-components'
import StyledToggleLabel from './StyledToggleLabel.component'

const StyledToggleInput = styled.input`
    opacity: 0;
    z-index: 1;
    width: 3.0rem;
    height: 1.85rem;
    border-radius: 1rem;
    &:checked + ${StyledToggleLabel}{
        background: #FD8623;
        &::after{
            content: "";
            display: block;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 1.4rem;            
            transition: 0.2s;            
        }
        &:hover{
            background: #F97609;
            &::after{
                width: 1.9rem;
                height: 1.9rem;
                margin-left: 1.3rem;
            };
        };
    };    
`
export default StyledToggleInput