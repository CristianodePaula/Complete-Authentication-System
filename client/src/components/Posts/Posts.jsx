import React from 'react'
import { Container } from './PostStyle'
import Card from '../../components/Card/Card'
import { posts } from '../../resources/Data'

export default function Index() {
  return (
    <>
      <Container>
        {posts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </Container>
    </>
  )
}
