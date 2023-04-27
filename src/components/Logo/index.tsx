import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoStyle = styled.div`
    width: 8em;
    height: 4em;
    margin-top: .4em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.theme.colors.logo});
    cursor:pointer;
`

const Logo = () => {
    return (
           <Link to='/'>
            <LogoStyle></LogoStyle>
           </Link>
    )
}

export default Logo