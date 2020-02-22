import React from 'react'
import StyledCard from './components/StyledCard.component'

const Card = (props) => {
return <StyledCard {...props}>{props.children}</StyledCard>
}
export default Card