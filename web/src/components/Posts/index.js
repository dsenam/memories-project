import React from 'react';
import {useSelector} from 'react-redux'
import { Container } from './styles';
import Post from './Post/index'

function Posts() {
  const posts = useSelector((state)=> state.posts)

  console.log(posts)
  return (
    <>
      <Container>
        <Post/>
      </Container>
    </>
  );
}

export default Posts;