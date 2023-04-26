import React, { useContext } from 'react'
import Menu from '../Menu'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import ToggleTremes from '../ToggleTheme'
import Logo from '../Logo'

interface Props {
  toggleTheme(): void;
}

const HeaderStyle = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
`

const Header = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderStyle>
      <Menu />
      <Logo onChange={toggleTheme}/>
      <ToggleTremes
        onChange={toggleTheme}
        checked={title === 'dark'}
      />
    </HeaderStyle>
  )
}

export default Header