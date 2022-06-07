import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  height: 10vh;        
  display: flex; 
  align-items: center; 
  justify-content: space-between;  
`
export const Menu = styled.ul`  
  display: flex; 
  list-style: none;
`
export const MenuLink = styled.li`
  padding: 50px;
  color: white; 
  font-size: 25px;
  cursor: pointer;
  &:hover { 
    color: grey;
    transform: scale(1.1); 
    transition: all 0.3s ease 
  } 
`
export const User = styled.div`
  display: flex;
  padding: 30px;
`
export const UserLink = styled.div`
  padding-right: 20px;
  color: white; 
  font-size: 20px;
  cursor: pointer;
  &:hover { 
    color: grey;
    transform: scale(1.05); 
    transition: all 0.3s ease 
  } 
`
export const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 20px;
  border: 2px solid white;
` 
export const UserName = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 20px;  
  color: white;
`
export const Logout = styled.span`
  color: red;
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`