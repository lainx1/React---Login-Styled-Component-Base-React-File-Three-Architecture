import styled from 'styled-components'

const StyledLabel = styled.label`
    color: black;
    font-weight: bold;
    width: 100%;
    margin-left: ${props => props.margin ? props.margin.left : 0};
    word-wrap: normal;
    word-break: break-all;    
`
export default StyledLabel