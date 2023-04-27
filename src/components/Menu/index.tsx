import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const MenuStyle = styled.section`
    color: ${props => props.theme.colors.text};  
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: .8em;
    margin: 0 2em;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
  
    .optionMenu {
        margin: .4em 0;
        cursor:pointer;
        position:relative;
        display:inline-block;
    }

    .optionMenu:after {
        display: block;
        content: '';
        border-bottom: 2px solid ${props => props.theme.colors.secundary};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    .optionMenu:hover:after {
        transform: scaleX(1);
    }

    .divSpan {
        border: 1px solid ${props => props.theme.colors.color};
        border-radius: 4em;
        width: 4px;
        height: 4px;
        background-color: ${props => props.theme.colors.text};
        margin: 1px;
    }

    @media (min-width: 1024px) and (max-width: 1366px) {
        margin: 0 14em;
        font-size: .9em;
    }


`

const Menu = () => {

    return (
        <MenuStyle>
            <a className='optionMenu'>Sobre mim</a>
            <span className='divSpan'></span>
            <a className='optionMenu'>Tecnologias </a>
            <span className='divSpan'></span>
            <a className='optionMenu'>Experiências</a>
            <span className='divSpan'></span>
            <a className='optionMenu'>Projetos</a>
        </MenuStyle>
    )
}

export default Menu