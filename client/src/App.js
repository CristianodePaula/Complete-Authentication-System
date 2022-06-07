import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Post from "./pages/Post/Post"
import Navbar from './components/Navbar/Navbar'
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  const [validate, setValidate] = useState(null)

  useEffect(() => {
    const getUser = () => {
    fetch("http://localhost:5000/auth/login/success",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("Autenticação falha");
        })
        .then((resObject) => {
          setValidate(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar validate={validate} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={user || validate ? <Navigate to='/' /> : <Login />} />
          <Route path="/post/:id" element={user || validate ? <Post /> : <Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App