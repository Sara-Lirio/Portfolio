import React from 'react'
import styled from 'styled-components'
import LogoDark from '../../assets/LogoDark.mp4'
import bg from "../../assets/backgroundDark.png"

const HomeStyle = styled.section`
    width: 100%;
    z-index: -1;
    position: absolute;
    left: 0px;
    top:0px;
    background: ${props => props.theme.colors.background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    font-size: 1.4em;
    line-height: 1.5em;

    .containerText {
        margin: 10em 2em 0 2em;
        text-align:center;
        font-family: 'Sniglet', cursive;
        color: ${props => props.theme.colors.primary};
    }

    .containerText span{
      text-transform: uppercase;
      font-weight: 600;
      color:${props => props.theme.colors.secundary};
      font-size: 1.6em;
    }

    @media (min-width: 1024px) and (max-width: 1366px) {
      background-image: url(${props => props.theme.colors.backgroundImage});
      font-size: 1.6em;

      .containerText {
        width: 20em;
        margin: 10em 4em 0 4em;
        text-align:center;
        font-family: 'Sniglet', cursive;
    }
  }

`

const Home = () => {

  return (
    <HomeStyle>
      <section className='containerText'>
        <p>Olá, me chamo Sara!</p>
        <p>Sou desenvolvedora <span> Front end </span>
          eu me divirto codando e solucionando problemas.</p>
        <p>Seja muito bem-vindo(a) !</p>
      </section>
    </HomeStyle>
  )
}

export default Home