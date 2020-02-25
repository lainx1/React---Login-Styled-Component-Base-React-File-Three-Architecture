import React from 'react'
import StyledInputContainer from './components/StyledInputContainer.component'

const InputContainer = (props)=>{
    return <StyledInputContainer>{props.children}</StyledInputContainer>
}
export default InputContainer