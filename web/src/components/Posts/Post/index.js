import React from 'react';
import moment from 'moment'
import { Container, PostContent, Interactions } from './styles';
import {MdFavoriteBorder, MdClear} from 'react-icons/md'
import {useDispatch} from 'react-redux'

import {deletePost, likePost} from '../../../actions/posts'

function Post({post}) {
  const dispatch = useDispatch()
  return (
    <>
      <Container>
        <PostContent key={post.id}>
          <h1>{post.creator}</h1>
          <p>{moment(post.createdAt).fromNow()}</p>        
          <img src={post.selectedFile} alt={post.title}/>
          <span>{post.tags.map(tag => `#${tag}`)}</span>
          <title>{post.title}</title>
          <article>{post.message}</article>
          <Interactions>
            
            <button onClick={() => dispatch(likePost(post._id))}>
              <MdFavoriteBorder />
            </button>
            <button>
              <MdClear onClick={() => dispatch(deletePost(post._id))} />
            </button>
          </Interactions>
        </PostContent>
      </Container>
    </>
  );
}

export default Post;