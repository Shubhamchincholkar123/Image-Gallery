import React from 'react';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const navbar = () => {
    return ( <
        >
        <
        br id = 'navbar' / >
        <
        Navbar bg = "light"
        variant = "light" >
        <
        Container id = 'navbar' >
        <
        Navbar.Brand href = "#home" > Image Gallery < /Navbar.Brand>   <
        Nav className = "div row-flex " >
        <
        Nav.Link href = "https://unsplash.com/s/photos/explore" > Explore < /Nav.Link>   <
        Nav.Link href = "https://unsplash.com/s/photos/collection" > collection < /Nav.Link>  <
        Nav.Link href = "#" > Contact < /Nav.Link>    <
        Nav.Link href = "#" > < /Nav.Link>  <
        /Nav>  </Container > < /Navbar> <
        br / >

        <
        />
    )
}

export default navbar