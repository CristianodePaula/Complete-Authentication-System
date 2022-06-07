import styled from "styled-components"

export const Container = styled.div`
`
export const Cards = styled.div`
  height: 340px;
  margin: 30px; 
  width: 600px;
  display: flex;
  align-items: center;
  text-align: center;
  background: #e6e6fa;
`
export const Image = styled.img`
  heigth: 300px;
  width: 300px;
  border-radius: 10px;
  margin: 20px;
`
export const Text = styled.div`
  max-width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 20px;
`
export const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
`
export const Desc = styled.span`
  width: 220px;
  margin: 20px;
  overflow: hidden;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 5; 
  -webkit-box-orient: vertical; 
  
`
export const Button = styled.button`
  height: 30px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  font-size: 15px;
  border: 1px solid black;
  background: #B0C4DE;
  color: blac;
  margin-top: 10px;
  cursor: pointer;
  &:hover { 
    background: grey;
    transform: scale(1.1); 
    transition: all 0.3s ease 
  } 
`
