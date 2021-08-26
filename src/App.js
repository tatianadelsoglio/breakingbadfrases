import React, {useState}from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-direction: column;

`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100% );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 3px solid black;
`;

function App() {

  //state de frases
  const [frase, guardarFrase] = useState({});


  //con async y await evito usar los ".then" que son los promises que serian necesarios para poder acceder a los datops de la api
  //Queda el código más limpio
  const consultarAPI = async () => {
    const api = await fetch('https://breakingbadapi.com/api/quotes')
    const frase = await api.json()
    for (let i = 0; i < frase.length; i++) {
      guardarFrase(frase[i]);
    }
  }

  return (
    <>
    <Contenedor>
      <Frase
        frase = {frase}
      />

        <Boton
          onClick={ () => consultarAPI()}
        >
          Obtener Frase
        </Boton>      
    </Contenedor>
    </>
  );
}

export default App;
