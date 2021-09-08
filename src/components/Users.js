import React from 'react'
import styled from 'styled-components'
import { User } from './User'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  margin-top: 2.5em;
`

export const Users = ({users}) => {
  return (
    <Wrapper>
      {users.map(user => {
        return <User user={user}></User>
      })}
    </Wrapper>
  )
}
