import React from 'react'
import StyledToggleWrapperRoot from './components/StyledToggleWrapperRoot.component'

const ToggleWrapperRoot = (props) => 
    <StyledToggleWrapperRoot {...props}>{props.children}</StyledToggleWrapperRoot>
export default ToggleWrapperRoot

