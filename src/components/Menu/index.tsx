import React, { useState } from 'react'
import styled from 'styled-components'
import { CiMenuKebab } from "react-icons/ci";

const MenuStyle = styled.section`
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;

    .btnMenu{
        font-size:1em; 
    }

    .containerMenu{
        // background-color: red;
        font-size: .5em;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2em 1em;
        height: 16em;
    }
`

const Menu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu((show) => !show)
    }

  return (
    <MenuStyle>
        <CiMenuKebab onClick={handleShowMenu} className='btnMenu'/>
        {showMenu && (
            <div className='containerMenu'>
                <p>Sobre mim</p>
                <p>Tecnologia e Habilidades</p>
                <p>Minha Experiência</p>
                <p>Projetos</p>
            </div>
        )}
    </MenuStyle>
  )
}

export default Menu