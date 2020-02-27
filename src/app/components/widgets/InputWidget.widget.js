import React from 'react'
import Input from '../global/Input/Input.component'
import Label from '../global/Label/Label.component'
import InputContainer from '../global/Containers/Input/InputContainer.component'

const InputWidget = (props)=>{
    return (
        <InputContainer>
            {
                props.label ? <Label htmlFor={props.id}>{props.label}</Label> : ''
            }
            <Input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder}/>
        </InputContainer>
    )
}

export default InputWidget