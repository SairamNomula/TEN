import React from 'react'
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    Icon,
    Text,
    Text2,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    FormButton2
} from './LoginElements'
const Login = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to ="/">TEN</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Welcome back!</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Login</FormButton>
                        <FormButton2 type='submit'>Login with Google</FormButton2>
                        <Text>Forgot password?</Text>
                        <Text2>Don't have an account? Signup!</Text2>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Login