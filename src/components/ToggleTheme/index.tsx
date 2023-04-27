import React from 'react'
import styled from 'styled-components';

export interface Props {
  onChange?: (e: any) => void;
  checked?: boolean;
}

const ConfiguracaoStyle = styled.section`
  .themes {
    display:flex;
    align-items: center
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3.2em;
    height: 1.5em;
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
    background-image: linear-gradient(#CB6CE6, #D0E0FF);
    -webkit-transition: .4s;
    transition: .4s;
  }
      
  .slider:before {
    position: absolute;
    content: "";
    height: .9em;
    width: .9em;
    left: .2em;
    bottom: .2em;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
      
  input:checked + .slider {
    background-image: linear-gradient(#CD4197, #CB6CE6);
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
    border: 2px solid #fff;
  }
      
  .slider.round:before {
    border-radius: 50%;
  }
`

const ToggleTremes = ({ onChange, checked }: Props) => {

  return (
    <ConfiguracaoStyle>
      <section className='themes'>
        <label className='switch'>
          <input type='checkbox'
            checked={checked}
            onChange={onChange} />
          <span className='slider round' ></span>
        </label>
      </section>
    </ConfiguracaoStyle>
  )
}

export default ToggleTremes

