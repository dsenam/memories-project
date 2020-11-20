import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-content: center;
  text-align: center;  
  height: 70vh;
  width: 400px;
  margin-left: 20px;
  border-radius: 5px;
  border: 2px solid #a1a2ce;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 20px;
    margin-top: 10px;
  }

  input {
    border: 1px solid #a1a2ce;
    padding: 12px;
    margin: 10px 0px 10px 0px;

    ::placeholder {
      color: #DCDCDC;
    }
  }

  textarea {
    padding: 15px;
    height: 150px;
    border:1px solid #a1a2ce;
    
    ::placeholder {
      color: #DCDCDC;
    }
  }

  button {
    margin: 15px 0px 10px 0px;
    height: 70px;
    color: white;
    background-color: #a1a2ce;
  }

`;
