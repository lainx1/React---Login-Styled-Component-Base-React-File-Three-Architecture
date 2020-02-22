import React from 'react'
import Root from '../global/Containers/Root/Root.component'
import Card from '../global/Containers/Card/Card.component'
import Input from '../global/Input/Input.component'
import Button from '../global/Button/Button.component'
import Label from '../global/Label/Label.component'

const Login = (props)=>{
    return (
        <Root>
            <Card>
                <Label for='email'>Ingresa tu email</Label>
                <Input id='email' placeholder='Email' type='text'/>
                <Label for='password'>Ahora el password</Label>
                <Input id='password' placeholder='Password' type='password'/>
                <Button>Login</Button>
            </Card>
        </Root>
    )
}
export default Login