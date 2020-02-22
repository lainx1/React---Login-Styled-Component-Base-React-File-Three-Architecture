import React from 'react'
import StyledRoot from './components/StyledRoot.component'

const Root = (props)=>{
    return <StyledRoot {...props}>{props.children}</StyledRoot>
}
export default Root