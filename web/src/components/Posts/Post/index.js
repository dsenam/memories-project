import React from 'react';

import { Container, PostContent, Interactions } from './styles';
import {MdFavoriteBorder, MdClear} from 'react-icons/md'

function Post() {
  return (
    <>
      <Container>
        <PostContent>
          <h1>Douglas Sena</h1>
          <p>1 hora atrás</p>        
          <img src="https://fotospublicas.com/wp-content/uploads/gravity_forms/11/2020/50621424931_bc1c87da56_k.jpg" alt="Viagens"/>
          <span>#tags #tags</span>
          <title>Título da publicação</title>
          <article>Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens </article>
          <Interactions>
            
            <button>
              <MdFavoriteBorder />
            </button>
            <button>
              <MdClear />
            </button>
          </Interactions>
        </PostContent>
      </Container>

      <Container>
        <PostContent>
          <h1>Douglas Sena</h1>
          <p>1 hora atrás</p>        
          <img src="https://fotospublicas.com/wp-content/uploads/gravity_forms/11/2020/50621424931_bc1c87da56_k.jpg" alt="Viagens"/>
          <span>#tags #tags</span>
          <title>Título da publicação</title>
          <article>Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens </article>
          <Interactions>
            
            <button>
              <MdFavoriteBorder />
            </button>
            <button>
              <MdClear />
            </button>
          </Interactions>
        </PostContent>
      </Container>

      <Container>
        <PostContent>
          <h1>Douglas Sena</h1>
          <p>1 hora atrás</p>        
          <img src="https://fotospublicas.com/wp-content/uploads/gravity_forms/11/2020/50621424931_bc1c87da56_k.jpg" alt="Viagens"/>
          <span>#tags #tags</span>
          <title>Título da publicação</title>
          <article>Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens Viagens </article>
          <Interactions>
            
            <button>
              <MdFavoriteBorder />
            </button>
            <button>
              <MdClear />
            </button>
          </Interactions>
        </PostContent>
      </Container>
    </>
  );
}

export default Post;