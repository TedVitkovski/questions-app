import React from 'react';
import styled from 'styled-components'; 
// import Textarea from 'react-textarea-autosize'

import { Title } from './components/styled_components'
import { ReactComponent as TreeSvg } from './images/tree1.svg'
// import { InputQuestion } from './components'+



const AppWrap = styled.div`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const AppTitle = styled(Title)`
  /* padding-bottom: 1rem; */
  /* border-bottom: 3px solid linear-gradient(to right, #fff, #fff, #fff; */
  font-family: 'Fira Sans';
  font-size: 1.8rem;
`
const Underline = styled.span`
  border-radius: 50%;
  font-size: 20rem;
  margin: 1rem;
  color: rgba(0, 0, 0, 0);
  background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary));
  height: 0.1rem;
  animation: lighten 1.2s ease alternate-reverse infinite;
  @keyframes lighten {
    0% { 
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary));
    }
    25% {
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary), white, var(--bg-color-primary)); 
    }
    50% { 
      background: linear-gradient(to right, white, var(--bg-color-primary), white);
    }
    75% { 
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary), white, var(--bg-color-primary)); 
    }
    100% {
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary)); 
    }
  } 
`
const InputQuestion = styled.textarea`
  font-family: Josephine;
  text-shadow: 1px 1px 18px rgba(150, 150, 150, 1);  
  text-shadow: 1px 1px 18px rebeccapurple;  
  font-weight: 900;
  font-size: 1.2rem;
  box-shadow: inset 0 0 0 5px #fff;
  border: none;
  outline: none;
  resize: none;
  overflow-wrap: break-word;
  cursor: pointer;
  width: 80%;
  min-width: 230px;
  /* margin-top: 2rem; */
  padding: 0.4rem 1rem;
  background-color: #eee;
  color: #09b781;
  color: #1cd2ab;
  color: #605454;
  transition: all, 0.2s, ease-in;
  &:hover {
      outline: none;
      background-color: white;
      box-shadow: inset 0 0 0 3px #eee;
  }
  &:focus {
      outline: none;
      background-color: white;
      /* background-color: #fffed0; */
      box-shadow: inset 0 0 0 5px #eee;
  }

`
// const InputQuestion = ({ className }) => {
//   return (
//       <Textarea
//           className={className}
//           maxRows={20}
//           minRows={3}
//           onHeightChange={(height) => {
//               console.log(height)
//           }}
//       />
//   )
// }
// ghdJiH {
//   font-size: 3rem;
//   border-radius: 34px 25px 77px 37px;
//   box-shadow: 2px 3px 10px;
//   position: absolute;
//   top: 14rem;
//   background-color: rebeccapurple;
//   background-color: #335d99d9;
//   height: 4rem;
//   width: 40vw;
//   text-shadow: 2px 3px 35px white;
// }

const Button = styled.button`
  border: none;
  color: var(--bg-color-primary);
  text-shadow: 2px 3px 35px white;
  font-size: 3rem;
  border-radius: 34px 25px 77px 37px;
  box-shadow: 2px 0.7px 13px #a35353;
  box-shadow: 1px 2px 70px #50eaf5f2;
  position: absolute;
  top: 14rem;
  background-color: rebeccapurple;
  background-color: #335d99;
  background-color: #335d99d9;
  height: 4rem;
  width: 40vw;
`
const ImgTree = styled(TreeSvg)`
  border-radius: 40px 20px 60px 80px;
  /* background: radial-gradient(rebeccapurple, var()) */
  /* background: rebeccapurple; */
  position: absolute;
  top: 30rem;
  left: 4rem;
  height: 18vh;
  width: auto;
`
function App() {
  return (
   <AppWrap>
     <AppTitle>Questions</AppTitle>
     <Underline>.</Underline>
     <InputQuestion></InputQuestion>
     <Button>?</Button>
     <ImgTree></ImgTree>
   </AppWrap> 
  );
}

export default App;
