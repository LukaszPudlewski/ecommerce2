import styled from 'styled-components'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

  const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  @media screen and (max-width: 700px) {
  flex-direction: column;
}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  @media screen and (max-width: 700px) {
  display: none;
}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`;

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>COOL SHOP LOGO</Logo>
            <Desc>
                You can find us there
            </Desc>
            <SocialContainer>
                <SocialIcon href="google.com" target="_blank" color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon href="google.com" target="_blank" color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon href="google.com" target="_blank" color="55ACEE">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 123 Street, City City, TF0 0ZZ
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 01952 000 000
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@coolshoplogo.co.uk
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer