import React from 'react';
import styled from 'styled-components';
import { NoEncryption, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 100vw;
${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
${mobile({ flex: 0, display: "none", visibility: "hidden" })}
@media screen and (max-width: 700px) {
  display: none;
}
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ display: "none" })}
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input/>
                <Search/>
              </SearchContainer>
            </Left> 
            <Center>
              <Link to={`/`} style={linkStyle}>
              <Logo>
                COOL SHOP LOGO
              </Logo>
              </Link>
            </Center>
            <Right>
              <Link to={`/register`} style={linkStyle}>
              <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to={`/login`} style={linkStyle}>
              <MenuItem>SIGN IN</MenuItem>
              </Link>
              <MenuItem>
              <Link to={`/cart`} style={linkStyle}>
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartOutlined/>
                </Badge>
                </Link>
              </MenuItem>
            </Right>
        </Wrapper>       
    </Container>
  )
}

export default Navbar