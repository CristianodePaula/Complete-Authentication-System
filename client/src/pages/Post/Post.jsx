import React from 'react'
import {
  Container,
  Cards,
  Title,
  Image,
  Desc
} from './PostStyle'
import { useLocation } from 'react-router-dom'
import { posts } from '../../resources/Data'

export default function Post() {

  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const post = posts.find((p) => p.id.toString() === path)
  console.log(location)

  return (
    <Container>
        <Cards>
        <Title>{post.title}</Title>
        <Image src={post.img}/>
        <Desc>{post.desc}</Desc>
        </Cards>
    </Container>
  )
}