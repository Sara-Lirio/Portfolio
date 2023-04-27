import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
    width: 8em;
    height: 4em;
    margin-top: .4em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.theme.colors.logo});
`

const Logo = () => {
    return (
        <LogoStyle>
           
        </LogoStyle>
    )
}

export default Logo