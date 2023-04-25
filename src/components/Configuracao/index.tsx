import React, { useState } from 'react'
import { RxGear } from "react-icons/rx";
import styled from 'styled-components';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";


export interface Props {
  onChange?: (e:any) => void;
  checked?: boolean;
}

const ConfiguracaoStyle = styled.section`
    cursor: pointer;
    display:flex;
    flex-direction: column;
    align-items: flex-end;


    .MenuConfiguracao{
      padding-left: .8em;
      padding-bottom: 1em;
      border-radius: 0 1em;
      height: 8em;
      display:flex;     
      flex-direction: column;
      justify-content: space-around; 
    }

    .themes{
        display:flex;
        align-items: center
    }

    .themesIcon {
        font-size: .9em;        
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 2.4em;
        height: 1.1em;
        margin: .2em;
      }
      
      .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(#87B0FF, #D0E0FF);
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: .75em;
        width: .75em;
        left: .18em;
        bottom: .18em;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      input:checked + .slider {
        background-image: linear-gradient(#121624,#252E48);
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }

      .textLanguage{
        font-size:.5em;
        letter-spacing: 1.2px;
        text-align:center;
        font-weight: 200;
      }

      .selectLanguage{
        width: 10em;
        font-weight: 500;
        letter-spacing: 1.2px;
        font-size:.5em;
        background-color: transparent;
        border-radius: .5em;
        padding: .4em;
        color: ${props => props.theme.colors.text};
      }

      .selectLanguage option{
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
      }

`

const Configuracao = ({onChange, checked}:Props) => {
    const [configuracao, setConfiguracao] = useState(false);

    const handleConfiguracao = () => {
        setConfiguracao((show) => !show)
    }

    return (
        <ConfiguracaoStyle>
            <RxGear onClick={handleConfiguracao} />
            {configuracao && (
                <span className='MenuConfiguracao'> 
                    <section className='themes' onChange={onChange}>
                        <BsFillSunFill className='themesIcon'/>
                        <label className='switch'>
                            <input type='checkbox' 
                            checked={checked}
                            />
                            <span className='slider round' ></span>
                        </label>
                        <BsFillMoonStarsFill className='themesIcon'/>
                    </section>
                    <div>
                        <p className='textLanguage'>Idioma/Language</p>
                        <select className='selectLanguage'>
                            <option className='optionLanguage'>
                              Português (pt-br)
                              </option>
                            <option className='optionLanguage'>English (en-us)</option>
                        </select>
                    </div>
                </span>
            )}
        </ConfiguracaoStyle>
    )
}

export default Configuracao