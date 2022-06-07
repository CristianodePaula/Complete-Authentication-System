import React from 'react'
import {
  Container,
  Menu,
  MenuLink,
  User,
  UserLink,
  UserImg,
  UserName,
  Logout
} from './NavbarStyle'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/apiCalls'

export default function Navbar({ validate }) {

  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    logout(dispatch, {})
    window.open("http://localhost:5000/auth/logout", "_self")
  }

  return (
    <Container>
      <Menu>
        <MenuLink>
          <Link to='/'>Home</Link>
        </MenuLink>
      </Menu>
      <User>
        {!(validate || user) &&
          <>
            <UserLink>
              <Link to='/login'>Entrar</Link>
            </UserLink>
            <UserLink>
              <Link to='/register'>Cadastrar</Link>
            </UserLink>
          </>
        }
        {validate &&
          <>
            <UserImg src={validate.photos[0].value} />
            <UserName>{validate.displayName}</UserName>
          </>
        }
        {(validate || user) &&
          <>
            <Logout onClick={handleLogout}>
              <Link to='/'>
                Sair
              </Link>
            </Logout>
          </>
        }
      </User>
    </Container>
  )
}