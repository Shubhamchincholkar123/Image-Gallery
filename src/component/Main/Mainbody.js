import React from 'react'
import './main'
import './main.css'
import Carousel from 'react-bootstrap/Carousel';
import { Nav } from 'react-bootstrap';

const Mainbody = () => {
    return ( <
        div className = 'div-row' > < Nav className = 'nav'
        justify variant = "tabs"
        defaultActiveKey = "/home" >
        <
        Nav.Item >
        <
        Nav.Link eventKey = "link-1"
        href = 'https://unsplash.com/s/photos/wild-animal' > Wild Animals < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-2"
        href = 'https://unsplash.com/s/photos/building' > Buliding < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-3"
        href = 'https://unsplash.com/t/wallpapers' > Cars < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-4"
        href = 'https://unsplash.com/s/photos/flowers' > Flower < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-5"
        href = 'https://unsplash.com/t/wallpapers' > Wallpaper < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-6"
        href = 'https://unsplash.com/t/nature' > Nature < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-7"
        href = 'https://unsplash.com/t/3d-renders' > 3 D Renders < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-8"
        href = 'https://unsplash.com/s/photos/back-ground' > Background < /Nav.Link> <
        /Nav.Item>

        <
        /Nav> <
        Carousel className = 'slider' >
        <
        Carousel.Item id = 'slider-row' >
        <
        img className = "img-1"
        src = "https://source.unsplash.com/1600x800/?morning"
        alt = 'First slide' /
        >
        <
        Carousel.Caption >
        <
        h3 className = 'h1' > Morning Vibes Image < /h3> <
        p className = 'h3' > May this morning offer you new hope
        for life!May you be happy and enjoy every moment of it. < br / > Good morning < /p> <
        /Carousel.Caption>  <
        /Carousel.Item>  <
        Carousel.Item id = 'slider-row' >
        <
        img className = "img-1"
        src = "https://source.unsplash.com/1600x800/?afternoon"
        alt = "Second slide" / >

        <
        Carousel.Caption >
        <
        h3 className = 'h1' > Afternoon Vibes Image < /h3>  <
        p className = 'h3' > Being in love with you is the sweetest feeling I have ever known. < br / > Thank you
        for making my days colorful < /p> <
        /Carousel.Caption> <
        /Carousel.Item>  <
        Carousel.Item id = 'slider-row' >
        <
        img className = "img-1 "
        src = "https://source.unsplash.com/1600x800/?evening"
        alt = "Third slide" / >

        <
        Carousel.Caption >
        <
        h3 className = 'h1' > Evening Vibes Image < /h3>  <
        p className = 'h3' >
        Wishing you a peaceful and relaxing evening. < br / > You deserve it after a long tiring day. < br / > Good evening, my love!I can’ t wait to hear about how your day has been spent < /p> <
        /Carousel.Caption> <
        /Carousel.Item>  <
        Carousel.Item id = 'slider-row' >
        <
        img className = "img-1"
        src = "https://source.unsplash.com/1600x800/?night"
        alt = 'Forth slide' /
        >
        <
        Carousel.Caption >
        <
        h3 className = 'h1' > Night Vibes Image < /h3> <
        p className = 'h3' > No matter how bad the day was, always
        try to end it with positive thoughts. <
        br / > Try to focus on the next day and hope
        for a sweet dream. < /p> <
        /Carousel.Caption>  <
        /Carousel.Item> <
        /Carousel>


        <
        /div>
    )
}

export default Mainbody