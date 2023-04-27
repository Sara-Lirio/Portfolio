import React from 'react'
import styled from 'styled-components'

const SobreStyle = styled.section`
width: 100%;
z-index: -1;
position: absolute;
left: 0px;
top:0px;
background: ${props => props.theme.colors.background});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;


@media (min-width: 920px) and (max-width: 1920px) {
    background-image: url(${props => props.theme.colors.bgSobre});
}
`

const Sobre = () => {
  return (
    <SobreStyle>

    </SobreStyle>
  )
}

export default Sobre