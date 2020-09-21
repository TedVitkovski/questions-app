import React from 'react';
import styled from 'styled-components';

import { Title } from './components/styled_components'
import { InputQuestion } from './components'

const AppWrap = styled.div`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const AppTitle = styled(Title)`
  font-family: 'Fira Sans';
  font-size: 1.8rem;
`

function App() {
  return (
   <AppWrap>
     <AppTitle>Questions</AppTitle>
     <InputQuestion></InputQuestion>
   </AppWrap> 
  );
}

export default App;
