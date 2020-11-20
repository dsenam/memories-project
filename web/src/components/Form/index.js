import React from 'react';

import { Container } from './styles';

function Form() {
  return (
     <>
     <Container>
     <form>
        <h1>Crie sua memória !</h1>
        <input type="text" placeholder="Criador" />
        <input type="text" placeholder="Título" />
        <textarea placeholder="Mensagem..."></textarea>
        <input type="text" placeholder="Tags" />
        <input type="file" />
        <button type="submit">ENVIAR</button>
      </form>
     </Container>
      
    </>
)}

export default Form;