import React, { useContext } from 'react'
import Menu from '../Menu'
import Configuracao from '../Configuracao'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme(): void;
}

const HeaderStyle = styled.header`
    font-size: 20px;
    height: 3em;
    display:flex;
    justify-content: space-between;
    padding-top: 1em;

    @media (min-width: 1022px) and (max-width: 1400px) {
      font-size: 24px;
    }
`

const Header = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderStyle>
      <Menu />
      <Configuracao
        onChange={toggleTheme}
        checked={title === 'dark'}
      />
    </HeaderStyle>
  )
}

export default Header