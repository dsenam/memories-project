import React, {useState} from 'react';
import FileBase from 'react-file-base64';
import { Container } from './styles';
import {useDispatch} from 'react-redux'
import { createPost } from '../../actions/posts';

function Form() {
  const [postData, setPostData] = useState({
    creator:'', title:'', message: '', tags: '', selectedFile: ''
  })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost(postData))
  }

  const clear = () => {

  }
  return (
     <>
     <Container>
     <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h1>Crie sua memória !</h1>
        <input type="text" placeholder="Criador" onChange={(e) => setPostData({...postData, creator: e.target.value})} value={postData.creator}/>
        <input type="text" placeholder="Título" onChange={(e) => setPostData({...postData, title: e.target.value})} value={postData.title}/>
        <textarea placeholder="Mensagem..." onChange={(e) => setPostData({...postData, message: e.target.value})} value={postData.message}></textarea>
        <input type="text" placeholder="Tags" onChange={(e) => setPostData({...postData, tags: e.target.value})} value={postData.tags}/>
        <div>
          <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile:base64})}/>
        </div>
        <button type="submit">ENVIAR</button>
        <button onClick={clear}>LIMPAR</button>
      </form>
     </Container>
      
    </>
)}

export default Form;