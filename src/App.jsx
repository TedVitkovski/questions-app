import React from 'react';
import styled from 'styled-components'; 
import Textarea from 'react-textarea-autosize';


import { Title } from './components/styled_components'
import { ReactComponent as TreeSvg } from './images/tree1.svg'
// import { InputQuestion } from './components'+


const InputQuestion = ({ className }) => {
    return (
        <Textarea
            className={className}
            maxRows={5}
            minRows={2}
            onHeightChange={(height) => {
                console.log(height)
            }}
        />
    )
}

const AppWrap = styled.div`
  overflow: hidden;
  height: 100vh;
  padding-top: 3rem;
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
  font-size: 2rem;
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
const InputMainQuestion = styled(InputQuestion)`
  background: url('../images/tree1.svg') no-repeat;
  line-height: 1.5rem;
  margin-top: 2rem;
  font-family: 'Josefin Sans', sans-serif;
  text-shadow: 1px 1px 18px rgba(150, 150, 150, 1);  
  /* text-shadow: 1px 1px 18px rebeccapurple;   */
  font-weight: 300;
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
  padding: 0.8rem 1.2rem;
  background-color: #eee;
  color: #09b781;
  color: #1cd2ab;
  color: #605454;
  color: #572889;
  color: #5e656f;
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
    transform: scale(1.3);
    border: none;
    color: var(--bg-color-primary);
    color: #a1caea;
    /* color: #50eaf5f2; */
    text-shadow: 2px 3px 35px white;
    font-size: 3rem;
    font-size: 1.8rem;
    font-size: 265%;
    border-radius: 34px 25px 77px 37px;
    box-shadow: 2px 0.7px 13px #a35353;
    box-shadow: 1px 2px 70px #50eaf5f2;
    position: absolute;
    /* top: 14rem; */
    top: 18rem;
    top: 21rem;
    background-color: rebeccapurple;
    background-color: #335d99;
    background-color: #335d99d9;
    height: 4rem;
    height: 2.5rem;
    width: 40vw;
    width: 30vw;
    transition: all, 0.2s;
  &:focus {
    transform: scale(1.25);
    outline: none;
    border: none;
    color: #7397cad9;
    /* color: #052149d9; */
    color: #50eaf5f2;
    color: white;
    text-shadow: 2px 3px 35px white;
    font-size: 2.8rem;
    font-size: 1.4rem;
    font-size: 200%;
    border-radius: 34px 25px 77px 37px;
    box-shadow: 2px 0.7px 33px #a35353;
    box-shadow: 1px 2px 70px #50eaf5f2;
    position: absolute;
    /* top: 14rem; */
    top: 18rem;
    top: 20.8rem;
    background-color: var(--bg-color-secondary);
  }
  &:active {
    transform: scale(1.3);
    border: none;
    color: var(--bg-color-primary);
    color: #a1caea;
    /* color: #50eaf5f2; */
    text-shadow: 2px 3px 35px white;
    font-size: 3rem;
    font-size: 1.8rem;
    font-size: 265%;
    border-radius: 34px 25px 77px 37px;
    box-shadow: 2px 0.7px 13px #a35353;
    box-shadow: 1px 2px 70px #50eaf5f2;
    position: absolute;
    /* top: 14rem; */
    top: 18rem;
    top: 21rem;
    background-color: rebeccapurple;
    background-color: #335d99;
    background-color: #335d99d9;
    /* height: 4rem;
    width: 40vw; */
    transition: all, 0.2s, ease-in;
  }
`
const ImgTree = styled(TreeSvg)`
  border-radius: 40px 20px 60px 80px;
  /* background: radial-gradient(rebeccapurple, var()) */
  /* background: rebeccapurple; */
  position: absolute;
  top: 30rem;
  top: 35rem;
  left: 4rem;
  left: 5rem;
  height: 18vh;
  height: 10vh;
  width: auto;
`
const ImgTreeBig = styled(TreeSvg)`
  z-index: -1;
  right: 2rem;
  opacity: 0.2;
  /* fill: #ff000052; */
  border-radius: 40px 20px 60px 80px;
  /* background: radial-gradient(rebeccapurple, var()) */
  background: rgba(255, 255, 255, .2);
  position: absolute;
  margin: 0 auto;
  height: 100%;
  width: auto;
`
const DivOnChange = styled.span`
  opacity: 0.3;
  border-radius: 50%;
  font-size: 20rem;
  margin: 1rem;
  /* color: rgba(255, 255, 255, 0.3); */
  color: rgba(255, 255, 255, 0);
  background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary));
  height: 1rem;
  animation: smile 0.2s ease infinite, move 4s ease-in-out alternate infinite;
  @keyframes smile {
    0% { 
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary));
      transform: rotate(0deg);
    }
    25% {
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary), white, var(--bg-color-primary)); 
      transform: rotate(360deg);
    }
    50% { 
      background: linear-gradient(to right, white, var(--bg-color-primary), white);
      transform: rotate(720deg);
    }
    75% { 
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary), white, var(--bg-color-primary)); 
      transform: rotate(1080deg);
    }
    100% {
      background: linear-gradient(to right, var(--bg-color-primary), white, var(--bg-color-primary)); 
      transform: rotate(1440deg);
    }
  } 
  @keyframes move {
    0% {
      transform: translateX(0rem) translateY(0rem) rotate(0deg);
    }
    100% {
      transform: translateX(5rem) translateY(6rem) rotate(0deg);
    }
  }
` 
function App() {
  return (
   <AppWrap>
     <AppTitle>Questions</AppTitle>
     <Underline>.</Underline>
     <InputMainQuestion></InputMainQuestion>
     <Button>?</Button>
     <ImgTree></ImgTree>
     <ImgTreeBig></ImgTreeBig>
     <DivOnChange>.</DivOnChange>
   </AppWrap> 
  );
}

export default App;
