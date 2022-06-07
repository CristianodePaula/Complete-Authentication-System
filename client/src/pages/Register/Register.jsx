import React, { useRef } from 'react'
import {
  Container,
  ContainerLgn,
  BoxRegister,
  Form,
  Title,
  Input,
  Button,
} from './RegisterStyled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const { isFetching } = useSelector((state) => state.user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    }
    try {
      await axios.post("/validate/register", user);
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        <ContainerLgn>
          <BoxRegister>
            <Form onSubmit={handleSubmit}>
              <Title>CADASTRE-SE</Title>
              <Input
                type='text'
                placeholder="nome de usuário"
                ref={username}
              />
              <Input
                type="email"
                placeholder="digite seu email"
                ref={email}
              />
              <Input
                type="password"
                placeholder="digite sua senha"
                ref={password}
              />
              <Button
                type='submit'
                disabled={isFetching}
              >Enviar
              </Button>
            </Form>
          </BoxRegister>
        </ContainerLgn>
      </Container>
    </>
  )
}











/*
 <>
    <div className='register'> 
    <h1>Registrar</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder='nome' />
          <input placeholder='email' ref={email}/>
          <input placeholder='senha' ref={password}/>
          <button type='submit'>Registrar</button>
        </form>
    </div>
    </>
*/