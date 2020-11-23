import React, {useEffect} from 'react';

import { Container, MainContainer, FormContent } from './styles';
import Form from '../../components/Form'
import Posts from '../../components/Posts'
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <>
      <Container>
         <header>
           <h1>MEMOBOOK</h1>
         </header>
      </Container>
      <MainContainer>
        <Form />      
        <Posts />
      </MainContainer>
    </>
  )
}

export default Home;