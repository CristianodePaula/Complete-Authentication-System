import styled from 'styled-components'

export const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #e6e6fa;
`
export const ContainerLgn = styled.div`
  height: 450px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px grey;
  background: white;
`
export const Title = styled.h1`
  font-size: 30px;
  position: absolute;
  top: 25%;
`
export const BoxSocial = styled.div``
export const Social = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  &:hover { 
    transform: scale(1.1); 
    transition: all 0.3s ease 
  } 
`
export const Image = styled.img`
  height: 20px;
  widht: 40px;
`
export const Line = styled.div`
  height: 250px;
  border: 1px solid black;
  margin-left: 50px;
`
export const BoxRegister = styled.div`
  margin-left: 50px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  height: 30px;
  width: 250px;
  background: aliceblue;
  border: 1px solid grey;
  padding: 10px;  
  margin-bottom: 25px;
  outline: 0px;
  ::placeholder {
    font-size: 16px;
}
`
export const Button = styled.button`
  background: mediumseagreen;
  border: 1px solid black;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 40px;
  width: 150px;
  cursor: pointer;
  &:hover {
    background: orange; 
    transform: scale(1.1); 
    transition: all 0.3s ease 
  }
`
export const Register = styled.button`
  background: darkgreen;
  border: 1px solid black;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-top: 20px;
  height: 40px;
  width: 150px;
  cursor: pointer;  
  &:hover {
    background: darkred; 
    transform: scale(1.1); 
    transition: all 0.3s ease 
  } 
`
