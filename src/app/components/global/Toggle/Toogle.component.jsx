import React from 'react'
import Label from '../Label/Label.component'
import ToggleLabel from './ToggleLabel.component'
import ToggleInput from './ToggleInput.component'
import ToggleWrapper from '../Containers/Toggle/ToggleWrapper.component'
import ToggleWrapperRoot from '../Containers/Toggle/ToggleWrapperRoot.component'

const Toggle = (props) =>
    <ToggleWrapperRoot>
        <ToggleWrapper id={props.id + '_parent'}>
            <ToggleInput id={props.id} type={'checkbox'}/>
            <ToggleLabel htmlFor={props.id} />
        </ToggleWrapper>
        <Label margin={{left:" 0.5rem"}} htmlFor={props.id + '_parent'}>He leido y acepto los términos y condiciones</Label>
    </ToggleWrapperRoot>    

export default Toggle