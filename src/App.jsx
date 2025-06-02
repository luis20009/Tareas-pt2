import { useState } from 'react'
import Title from './componentes/Title'
import Buton from './componentes/Buton'

const App = () => {
  
  const [lista, setLista] = useState([
    [0,'Rodrigo',0],
    [0,'Manola',0],
    
  ]);
  
  const votar = () => {
   const NewLista = [...lista]
   NewLista[instruccion][0] +=1
   setLista(NewLista)
 }
  const Like = () => {
    const LikeList = [...lista]
    LikeList[instruccion][2] +=0.01
    setLista(LikeList)
  }
  
  const [instruccion, setinstruccion] = useState(0)
  const chupame = () => {
    if (lista>0){
      setinstruccion(0)
    
    }
    else {
      setinstruccion(instruccion + 1)
   
    }
  }
  const resta = () => {
    const LikeList = [...lista]
    if (lista[instruccion][2] > 0){
      LikeList[instruccion][2] -=0.01
      setLista(LikeList)
    }
    else if (lista[instruccion][2] <= 0)  {
      LikeList[instruccion][2] =0
      setLista(LikeList)
    }
  }  
  
 console.log(lista[instruccion][2])
return(
  <div>
    <Title instruccio={lista[instruccion][1]}/>
    <Buton click={chupame} Text='cambiar'/> 
    <Buton click={Like} Text='LIKE'/>
    <Buton click ={resta} Text='Cancelar'/>
    <Buton click={votar}Text="SEGUIR"/>
    
    <p>{lista[instruccion][2]}</p>
    <p>{lista[instruccion][0]}</p>
  </div>
)
}


export default App
