import React from 'react'
import styled from 'styled-components'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const UserCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  padding: 1.7em;
  max-width: 303px !important;
  border-radius: 4px;
`
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: grey;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({url}) => `url(${url})`};
`
const UserName = styled.h5`
  font-size: 27px;
  color: #52575D;
  font-weight: 400;
  margin:.6em;
`
const Button = styled.button`
  outline: none;
  border: 1px solid #2B3241;
  color: #293242;
  border-radius: 4px;
  padding: .8em 2.6em;
  cursor: pointer;
  font-size: 15px;
  background: #fff;
  min-width: 80%;
  &:hover{
    background: #226CFC;
    border: 1px solid #226CFC;
    color: #fff;
    box-shadow: 0px 3px 6px #00000029;
  }
`
const CardActions = styled.div`
  display: flex;
  margin-top: 2em;
  i{
    cursor: pointer;
    color: rgba(0,0,0,.4);
    &:first-child{
      margin-right: 1em;
    }
  }
`

export const User = ({user}) => {
  return (
    <UserCard>
      <Avatar url={user.avatar_url}></Avatar>
      <UserName>{ user.name }</UserName>
      <Button>{ user.role }</Button>
      <CardActions>
        <i><FaEdit/></i>
        <i><FaRegTrashAlt/></i>
      </CardActions>
    </UserCard>
  )
}
