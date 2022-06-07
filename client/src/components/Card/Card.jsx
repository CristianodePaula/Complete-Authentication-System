import React from 'react'
import {
  Container,
  Cards,
  Image,
  Text,
  Title,
  Desc,
  Button
} from './CardStyle'
import { Link } from 'react-router-dom'

export default function Card({ post }) {
  return (
    <Container>
      <Cards>
        <Image src={post.img} />
        <Text>
          <Title>{post.title}</Title>
          <Desc>{post.desc}</Desc>
          <Button>
            <Link to={`/post/${post.id}`}> Ler mais </Link>
          </Button>
        </Text>
      </Cards>
    </Container>
  )
}
