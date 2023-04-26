import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { CgMenuGridR } from "react-icons/cg";
import { Link } from 'react-router-dom'
const MenuStyle = styled.section`
    .btnMenu {
        border:none;
        font-size: 2em;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};   
    }
    
`

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <MenuStyle>
            <Button variant="primary" 
            onClick={handleShow} className='btnMenu'>
                <CgMenuGridR />
            </Button>

            <Offcanvas show={show} >
                <p onClick={handleClose}>x</p>
                <Offcanvas.Body>
                    <Link to='/sobre'>Sobre mim</Link>
                    <Link to='/tech'>Tecnologias </Link>
                    <Link to='/exp'>Minha Experiência</Link>
                    <Link to='/projetos'>Projetos</Link>

                </Offcanvas.Body>
            </Offcanvas>
        </MenuStyle>
    )
}

export default Menu