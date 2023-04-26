import React from 'react'
import LogoLight from "../../assets/LogoLight.mp4"
import LogoDark from "../../assets/LogoDark.mp4"
import styled from 'styled-components'
import usePeristedState from '../../utils/usePersistedState'
import { DefaultTheme } from 'styled-components'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

export interface Props {
    onChange?: (e: any) => void;
  }

const LogoStyle = styled.div`
    width: 5em;
`

const Logo = ({ onChange }: Props) => {
    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', dark);

    const toggleTheme = () => {
        setTheme(theme.title === 'dark' ?  light : dark);
    };

    return (
        <LogoStyle>
            <video loop autoPlay muted onChange={onChange}>
                {
                    theme.title === 'light' ?
                        <source src={LogoLight} type='video/mp4'></source>
                        :
                        <source src={LogoDark} type='video/mp4'></source>
                }
            </video>
        </LogoStyle>
    )
}

export default Logo