import React from 'react'
import StyledToogleWrapper from './components/StyledToggleWrapper.component'

const ToggleWrapper = (props)=> (<StyledToogleWrapper {...props}>{props.children}</StyledToogleWrapper>)
export default ToggleWrapper