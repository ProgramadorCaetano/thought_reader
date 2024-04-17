import Bola from '../../assets/bola-de-cristal.jpg'
import { Title } from './styles'
import { Texto } from './styles'
import { useState, useRef } from 'react'
import audio1 from '../../assets/pensou.mp3'
import audio2 from '../../assets/mentalizar.mp3'
import {Container, Image, ContainerButton, SimButton, ContinuarButton, NaoButton} from "./styles"


function Home() {

  const [tabela, setTabela] = useState("")
  const [texto, setTexto] = useState("Após pensar clique em continuar")

  const [showBtncontinuar, setShowBtncontinuar] = useState(true);
  const [showBtnsim, setShowBtnsim] = useState(false);
  const [showBtnnao, setShowBtnnao] = useState(false);

  const playSound = new Audio(audio1);
  const playSound2 = new Audio(audio2)

  let numero = useRef(0)
  let verifica = useRef(0)



  /**#################################################################################### */
  const botaoSim = () => {
    console.log("chegou no btnsim")
    console.log("valor de verifica")
    console.log(verifica.current)
    setShowBtnsim(false)
    setShowBtnnao(false)

    if (verifica.current == 1) {

      numero.current = numero.current + 1
      playSound2.play()
      setTabela("Hummm.......Mentalizando...");
      setTexto("---------------------------")
      console.log("valor de numero")
      console.log(numero.current)
      setTimeout(() => { btnContinuar() }, 3000)
      
    } else if (verifica.current == 2) {
      numero.current = numero.current + 2
      playSound2.play()
      setTabela("Hummm.......Mentalizando...");
      setTexto("---------------------------")
      setTimeout(() => { btnContinuar() }, 3000)
      
    } else if (verifica.current == 3) {
      numero.current = numero.current + 4
      playSound2.play()
      setTabela("Hummm.......Mentalizando...");
      setTexto("---------------------------")
      setTimeout(() => { btnContinuar() }, 3000)
      
    } else if (verifica.current == 4) {
      numero.current = numero.current + 8
      playSound2.play()
      setTabela("Hummm.......Mentalizando...");
      setTexto("---------------------------")
      setTimeout(() => { btnContinuar() }, 3000)
      
    }

  }

  /**#################################################################################### */
  const result = () => {
    setTexto(numero.current)
    setShowBtnsim(false)
    setShowBtnnao(false)
    setShowBtncontinuar(true)
    numero.current = 0
    verifica.current = 0

  }

  /**#################################################################################### */
  const btnContinuar = () => {
    console.log("chegou no btncontinuar")
    verifica.current++
    console.log("valor de verifica")
    console.log(verifica.current)
    if (verifica.current == 5) {
      playSound.play()
      setTabela("Você pensou no número:");
      setTimeout(() => { result() }, 5000)

    } else if (verifica.current < 5) {
      showTabela()
      setShowBtnsim(true)
      setShowBtnnao(true)
      setShowBtncontinuar(false)
    }
  }

  /**#################################################################################### */
  const btnNao = () => {
    console.log("chegou no btnnao")
    console.log({ verifica })
    setShowBtnsim(false)
    setShowBtnnao(false)
    playSound2.play()
    setTabela("Hummm.......Mentalizando...");
    setTexto("---------------------------")
    setTimeout(() => { btnContinuar() }, 3000)
    
  }

  /**#################################################################################### */
  const showTabela = () => {
    if (verifica.current == 1) {
      setTabela("O número que você pensou está na lista abaixo?");
      setTexto("1-3-5-7-9-11-13-15")
    } else if (verifica.current == 2) {
      setTabela("O número que você pensou está na lista abaixo?")
      setTexto("2-3-6-7-10-11-14-15")
    } else if (verifica.current == 3) {
      setTabela("O número que você pensou está na lista abaixo?")
      setTexto("4-5-6-7-12-13-14-15")
    } else if (verifica.current == 4) {
      setTabela("O número que você pensou está na lista abaixo?")
      setTexto("8-9-10-11-12-13-14-15")
    }
  }
  /**#################################################################################### */

  return (
    <Container>
      <Title>THOUGHT READER by Caetano</Title>
      <Texto>Este aplicativo irá adivinhar seu pensamento.</Texto>
      <Texto>Pense em um número de 0 a 15! Apenas pense!</Texto>
      <Image src={Bola} alt="Bola de cristal" title="Bola de cristal" />
      <Texto>{tabela}</Texto>
      <Texto>{texto}</Texto>

      <ContainerButton>
        {showBtnsim && <SimButton onClick={botaoSim} >SIM</SimButton>}
        {showBtncontinuar && <ContinuarButton onClick={btnContinuar} >CONTINUAR</ContinuarButton>}
        {showBtnnao && <NaoButton onClick={btnNao} >NÂO</NaoButton>}
      </ContainerButton>

    </Container>
  )
}

export default Home