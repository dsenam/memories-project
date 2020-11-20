import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 600px;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  background-color: white;
  margin: 20px 0px;

`;

export const PostContent = styled.div`
margin-top:10px;
margin-left: 10px;
margin-right: 10px;
justify-content: center;
text-align: center;

  h1 {
    font-size: 16px;
  }

  p {
    color: #dcdcdc;
    font-size: 12px;
  }

  img {
    width: 100%;
    height: 450px;
    margin-top: 10px;
  }

  span {
    color: #dcdcdc;
    font-size: 12px;
  }

  article {
    margin-left: 5px;
    width: 100%;
  }
`;


export const Interactions = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center; 
  width: 100%;

  button {
    margin: 10px 30px 0px 30px;
    background-color: white;
  }

  svg {
    color: red;
    font-size: 25px;
  }
`;

