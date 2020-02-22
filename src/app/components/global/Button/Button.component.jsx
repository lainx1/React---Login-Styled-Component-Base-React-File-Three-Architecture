import React from 'react'
import StyledButton from './components/StyledButton.component'

const Button = (props)=>{
    return (<StyledButton {...props}>{props.children}</StyledButton>)
}
export default Button