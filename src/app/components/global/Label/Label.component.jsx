import React from 'react'
import StyledLabel from './components/StyledLabel.component'

const Label = (props)=>{
    return (<StyledLabel {...props}>{props.children}</StyledLabel>)
}
export default Label