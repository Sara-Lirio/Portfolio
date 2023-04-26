import React, { useState } from 'react'
import styled from 'styled-components'
import { CgMenuGridR } from "react-icons/cg";


const MenuStyle = styled.section`
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 1;

    .btnMenu {
        font-size:1em; 
        width: 4em;
    }

    .containerMenu {
        font-size: .5em;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${props => props.theme.colors.bgMenus}
        height: 18em;
        padding-top: 1em;
        width: 100%;
    }

    .optionMenu {
        background-color: ${props => props.theme.colors.bgMenus};
        padding: 1.4em 4em;
    }

    .optionMenu:hover {
        background-color: rgb(128,0,128, .7)
    }
`

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu((show) => !show)
    }

    return (
        <MenuStyle>
            <CgMenuGridR onClick={handleShowMenu} className='btnMenu' />
            {showMenu && (
                <div className='containerMenu'>
                    <p className='optionMenu'>Sobre mim</p>
                    <p className='optionMenu'>Tecnologias </p>
                    <p className='optionMenu'>Minha Experiência</p>
                    <p className='optionMenu'>Projetos</p>
                </div>
            )}
        </MenuStyle>
    )
}

export default Menu