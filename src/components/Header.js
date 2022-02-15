import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { Fade } from "react-awesome-reveal";


function Header() {
  return (
    <Container>
      <Fade triggerOnce="true">

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
          <CustomMenu/>
        </RightMenu>
      </Fade>

    </Container>
  )
}

export default Header

const Logo = styled.div`
align-tems: center;
padding:15px;

`

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-tems: center;
  justify-content: space-between;
  padding: 20px 20px;
  // top: 0;
  // left: 0;
  // right 0;
  width: 100%;
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