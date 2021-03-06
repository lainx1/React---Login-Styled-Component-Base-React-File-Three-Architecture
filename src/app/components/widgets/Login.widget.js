import React from 'react'
import Root from '../global/Containers/Root/Root.component'
import Card from '../global/Containers/Card/Card.component'
import Button from '../global/Button/Button.component'
import InputWidget from '../widgets/InputWidget.widget'
import Toogle from '../global/Toggle/Toogle.component'

const Login = (props)=>{
    return (
        <Root>
            <Card>
                <InputWidget
                    id={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    label={"Ingresa tu email"}
                />
                <InputWidget
                    id={"password"}
                    name={"password"}
                    placeholder={"Contraseña"}
                    type={"password"}
                    label={"Ahora la contraseña"}
                />
                <Toogle id={'acceptedTermsAndConditions'}/>
                <Button type={"submit"}>Login</Button>
            </Card>
        </Root>
    )
}
export default Login