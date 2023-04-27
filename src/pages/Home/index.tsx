import React from 'react'
import styled from 'styled-components'
import { TbBrandLinkedin, TbBrandGithub, TbBrandDiscord, TbMail } from "react-icons/tb";

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
      cursor: pointer
    }

    .containerText span p{
      display:none;
      font-size: .6em;
      font-weight: 400;
    }

    .containerContatos{
      font-size: 1.5em;
      margin: 1em;
      display:flex;
      justify-content:space-around;
    }

    .containerContatos .icon:hover{
      color:${props => props.theme.colors.secundary};
      cursor: pointer
    }

    @media (min-width: 920px) and (max-width: 1920px) {
      background-image: url(${props => props.theme.colors.backgroundImage});
      font-size: 1.6em;
      
      .containerText span:hover .miau{
        display:inline;
        position: fixed;
        top:16em;
        left: 31.5em;
      }

      .containerText span:hover .miaau{
        transition-delay: 5s;
        display:inline;
        position: fixed;
        top:19em;
        left: 25.8em;
      }

      .containerText {
        width: 20em;
        margin: 10em 4em 0 4em;
        text-align:center;
        font-family: 'Sniglet', cursive;
    }

  .containerContatos{
    font-size: 2em;
  }
}
`

const Home = () => {
  return (
    <HomeStyle>
      <section className='containerText'>
        <p>Olá, me chamo Sara!</p>
        <p>Sou desenvolvedora <span> Front end <p className='miau'>miau</p>
          <p className='miaau'>miaau</p> </span>
          eu me divirto codando e solucionando problemas.</p>
        <p>Seja muito bem-vindo(a) !</p>
        <div className='containerContatos'>
          <a href='https://www.linkedin.com/in/saralirio/'>
            <TbBrandLinkedin className='icon' />
          </a>
          <a href='https://github.com/Sara-Lirio'>
            <TbBrandGithub className='icon' />
          </a>
          <TbBrandDiscord className='icon' />
          <TbMail className='icon' />
        </div>
      </section>
    </HomeStyle>
  )
}

export default Home