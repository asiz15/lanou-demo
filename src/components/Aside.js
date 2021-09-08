import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg';
import { MdChevronLeft } from "react-icons/md";

const AsideNav = styled.aside`
  height: 100vh;
  max-width: 542px;
  width: 542px;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0em;
  .title{
    display: flex;
    margin-bottom: 1em;
    img{
      width: 60px;
    }
    h1{
      font-size: 3em;
      color: #293242;
      font-weight: 800;
      .highlight{
        color: #6808FA;
      }
    }
  }
`
const AsideLinks = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  list-style: none;
  padding: 0 1em;
  margin-top: 3em;
  li{
    background: #F0F4F7;
    text-align: center;
    padding: 1.3em;
    margin-bottom: 1em;
    font-size: 21px;
    cursor: pointer;
    color: #293242;
    &:hover{
      background: #E5E5EE;
    }
  }
`
const BackBtn = styled.button`
  outline: none;
  background: #F0F4F7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  padding: .5em;
  width: 138px;
  align-self: flex-start;
  margin-left: 5%;
  border-radius: 4px;
  cursor: pointer;
  color: #293242;
  border-radius: 4px;
  font-size: 1.1.em;
`


export const Aside = () => {
  return (
    <AsideNav>
      <div className="title">
      <img src={logo} />
      <h1>Astro<span className="highlight">Box</span></h1>
      </div>
      <BackBtn>
      <MdChevronLeft size={23}/>
        Volver atrás</BackBtn>
      <AsideLinks>
        <li>Configuración general</li>
        <li>Temas</li>
        <li>Personalizar mi tienda</li>
        <li>Banner y slider</li>
        <li>Herramientas de marketing</li>
        <li>Usuarios</li>
      </AsideLinks>
    </AsideNav>
  )
}
