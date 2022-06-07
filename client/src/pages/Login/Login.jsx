import React, { useState } from 'react'
import {
  Container,
  ContainerLgn,
  Title,
  BoxSocial,
  Social,
  Image,
  Line,
  BoxRegister,
  Form,
  Input,
  Button,
  Register,
} from './LoginStyle'
import Google from "../../images/google.png"
import Facebook from "../../images/facebook.png"
import Github from '../../images/github.png'
import { login } from "../../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const youtube = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <>
      <Container>
        <ContainerLgn>
          <Title>FAÇA SEU LOGIN</Title>
          <BoxSocial>
            <Social onClick={google} style={{ background: 'red' }}>
              <Image src={Google} />
              Google
            </Social>
            <Social onClick={github} style={{ background: 'black' }}>
              <Image src={Github} />
              Github
            </Social>
            <Social onClick={youtube} style={{ background: 'blue' }}>
              <Image src={Facebook} />
              Facebook
            </Social>
          </BoxSocial>
          <Line></Line>
          <BoxRegister>
            <Form>
              <Input
                type='text'
                placeholder="usuário"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={handleClick}
                disabled={isFetching}
              >Entrar
              </Button>
              <Register>
                <Link to='/register'>
                  Cadastrar
                </Link>
              </Register>
            </Form>
          </BoxRegister>
        </ContainerLgn>
      </Container>
    </>
  )
}
