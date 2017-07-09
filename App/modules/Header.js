import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const Flex = {
  display: 'flex',
}

const HeaderContainer = glamorous.div({
 width: '100%',
 height: '100px',
 fontSize: '13px',
 color: '#7f8c8d',
 letterSpacing: '0.05em',
 justifyContent: 'space-between',
})

const Logo = glamorous.div({
  width: '10%',
  height: '100%',
  background: '#FFFFFF',
  fontSize: '13px',
  textTransform: 'uppercase',
  color: '#7f8c8d',
  padding: 0,
  letterSpacing: '0.05em',
	backgroundColor: 'grey',
	marginLeft: '2%',
});
const Menu = glamorous.ul({
    justifyContent: 'space-between',
		listStyle: 'none',
		margin: 0,
		padding: 0,
		height: '100%',
		background: 'blue',
		'> *': { 
			padding:'0 50px',
			height: '100%',
		 },
});
const MenuContainer = glamorous.div({
	justifyContent: 'space-around',
	lineHeight: '100px',
	marginRight: '2%',
});
const Auth = glamorous.ul({
	listStyle: 'none',
	background: 'yellow',
	height: '100%',
	margin: 0,
	padding: 0,
	'> *': { 
		padding:'0 20px',
		height: '100%',
	 },
});

class Home extends Component {
    render() {
        return (
            <HeaderContainer css={Flex}>
                <Logo>
                    Jolie Rêve Créole
                </Logo>
								<MenuContainer css={Flex}>
									<Menu css={Flex}>
										<li><Link to="/">Accueil</Link></li>
										<li><Link to="/datepicker">Studio</Link></li>
										<li><Link to="/slider">Contact</Link></li>
									</Menu>
									<Auth css={Flex}>
										<li>Se Connecter</li>
										<li>Créer un compte</li>  
									</Auth>
								</MenuContainer>
            </HeaderContainer>
        );
    }
}

export default Home;