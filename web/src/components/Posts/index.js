import React from 'react';
import {useSelector} from 'react-redux'
import { Container } from './styles';
import Post from './Post/index'

function Posts() {
  const posts = useSelector((state)=> state.posts)

  return (
    <>
      <Container>
        {posts.map((post) => (
            <Post  post={post}/>          
        ))}
      </Container>
    </>
  );
}

export default Posts;