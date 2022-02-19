import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import { Fade } from "react-awesome-reveal";


function Header() {
  const[burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <Fade triggerOnce="true">
      <ContainerOne>
          <Logo>
            <img src="/images/logo.svg"/>
          </Logo>
          <Menu>
            <a class="menu" href="#">Model S</a>
            <a class="menu" href="#">Model Y</a>
            <a class="menu" href="#">Model 3</a>
            <a class="menu" href="#">Model X</a>
          </Menu>
          <RightMenu>
            <a class="menu" href="#">Shop</a>
            <a class="menu" href="#">Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
          </RightMenu>
        </ContainerOne>
        

          <BurgerNav show={burgerStatus}> 
            <CloseWrapper>
              <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Existing Inventory</a></li>
          </BurgerNav>
        

      </Fade>

    </Container>
  )
}

export default Header

const Logo = styled.div`
align-tems: center;
padding:15px;

`

const ContainerOne = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-tems: center;
  justify-content: space-between;
  padding: 20px 20px;
  // top: 0;
  // left: 0;
  // right: 0;
  width: 100%;
  // z-index : 1;
  
`
const Container = styled.div`
position: fixed;
  z-index : 1;

`

const ContainerTwo = styled.div`
position: fixed;
  z-index : 5;

`

const Menu = styled.div`
  display: flex;
  align-items = center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding:15px;
    text-decoration: none;
    vertical-align: middle;

  }

  @media (max-width: 768px)
    {
        display: none;
    }

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding:   15px;
    text-decoration: none;
  }

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: start;
  transform: ${ props =>props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.2s ;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }

  a{
    text-decoration: none;
    font-weight: 600;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  

`