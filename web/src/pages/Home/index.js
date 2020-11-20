import React from 'react';

import { Container, MainContainer, FormContent } from './styles';
import Form from '../../components/Form'
import Posts from '../../components/Posts'

function Home() {
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