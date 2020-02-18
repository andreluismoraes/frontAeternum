import React from 'react';

import Header from './components/headerComponent/header'
import MAIN from './components/mainComponent/main'
import SOBRE from './components/sobreComponent/sobre'
import CONTATO from './components/contatoComponent/contato'


function App() {
  return (
    <div className="">
      <>
        <Header></Header>
        <MAIN></MAIN>
        <SOBRE></SOBRE>
        <CONTATO></CONTATO>
      </>
    </div>
  );
}

export default App;
