import React, { useContext } from 'react'
import Menu from '../Menu'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import ToggleTremes from '../ToggleTheme'
import LogoDark from "../../assets/LogoDark.mp4"
import LogoLight from "../../assets/LogoLight.mp4"

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

const LogoStyle = styled.div`
    width: 5em;
    position: static;
`

const Header = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderStyle>
      <Menu />
      <LogoStyle >
        {title === 'dark' ?
          <video loop autoPlay>
            <source src={LogoDark} type='video/mp4'></source>
            Your browser does not support HTML5 video.
          </video>
          :
          <video loop autoPlay>
            <source src={LogoLight} type='video/mp4'></source>
            Your browser does not support HTML5 video.
          </video>}
      </LogoStyle>
      <ToggleTremes
        onChange={toggleTheme}
        checked={title === 'dark'}
      />
    </HeaderStyle>
  )
}

export default Header