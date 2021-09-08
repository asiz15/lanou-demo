import logo from './logo.svg';
import styled, { createGlobalStyle } from 'styled-components'
import { Users } from './components/Users';
import { Aside } from './components/Aside';
import { MdExpandMore, MdDesktopWindows, MdNotificationsNone, MdChatBubbleOutline } from "react-icons/md";



const PageContainer = styled.div`
  min-height: 100vh;
  background: #F0F4F7;
`
const Header = styled.header`
  background: #ffffff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  padding: 2em 3em;
`
const Button = styled.button`
  outline: none;
  border: none;
  background: #226CFC;
  color: #fff;
  border-radius: 4px;
  padding: 1em 2.6em;
  text-transform: uppercase;
  font-size: .9em;

`
const HeaderNav = styled.nav`
  width: 40%;
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      .vertical{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
`
const PageTitle = styled.h2`
  font-size: 2em;
  margin: 0;
  padding: 0;
`

const PageContent = styled.section`
  padding: 2em;
  margin-left: 545px;
`
const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

function App() {
  const users = [
    {
      name: 'Juan Martinez',
      role: 'Administrador',
      avatar_url: 'http://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png'
    },
    {
      name: 'Pedro Pascal',
      role: 'Editor',
      avatar_url: 'https://raw.githubusercontent.com/ArjunAtlast/Profile-Card/master/assets/john-doe.png'
    },
    {
      name: 'Andre Peña',
      role: 'Contador',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKfpOZ_FHNrrhv-D8pnH_arzB0_DGKdVA6fGynQe4VCK8TbDYv6BfdBAJgRWkKwAn99g&usqp=CAU'
    },
    {
      name: 'Pablo Marmol',
      role: 'Editor',
      avatar_url: 'http://uilove.in/realestate/listo/preview/img/demo/profile.jpg'
    }
  ]
  return (
    <PageContainer>
      <Aside></Aside>
      <Header>
        <Button>Guardar</Button>
        <HeaderNav>
          <ul>
            <li>Diseño <MdExpandMore size={23}/></li>
            <li>
              <i><MdDesktopWindows size={30}/></i>
              <MdExpandMore size={23}/>
            </li>
            <li>
              <div className="vertical">
                <MdChatBubbleOutline size={23}/>
                <span>Ayuda</span>
              </div>
            </li>
            <li><MdNotificationsNone size={25}></MdNotificationsNone></li>
          </ul>
        </HeaderNav>
      </Header>
      <PageContent>
        <PageTitle>Usuarios</PageTitle>
        <Paragraph>Aprovecha estas herramientas para que tus acciones de marketing sean mas efectivas.</Paragraph>
        <Users users={users}></Users>
      </PageContent>
    </PageContainer>
  );
}

export default App;
