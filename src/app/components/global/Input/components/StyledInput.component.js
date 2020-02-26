import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    margin-top: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-left: 0.5rem;
    font-size: 1rem;
    border-width: 0;
    :invalid{
        background-color: #FCB0B0;
    }
`
export default StyledInput