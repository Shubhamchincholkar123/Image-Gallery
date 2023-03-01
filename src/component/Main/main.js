import React, { useState } from 'react'
import './main.css'
import Mainbody from './Mainbody'


function Main() {
    const [value, setValue] = useState("")
    const [results, setResults] = useState([])

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=lCghLWV-7dTpc9k1s2CdYxYnzAe9TPa5NJzgyRzsn0o&query=${value}&orientation=squarish&per_page=21`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResults(data.results);
            })
    }
    return ( <
        div className = 'App' >
        <
        div className = 'header' >
        <
        span > Search < /span> <
        input style = {
            { width: '60%' }
        }
        type = "text"
        value = { value }
        onChange = {
            (e) => setValue(e.target.value)
        }
        /> <
        button className = 'btn btn-warning'
        onClick = {
            () => fetchImages() } > < svg xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        fill = "currentColor"
        class = "bi bi-search"
        viewBox = "0 0 16 16" >
        <
        path d = "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" / >
        <
        /svg> <
        /button> <
        /div>  <
        div className = "gallery" > {
            results.map((item) => {
                return <img className = 'item'
                key = { item.id }
                src = { item.urls.regular }
                alt = '' / >
            })
        } <
        /div>  <
        Mainbody / >
        <
        /div>

    )
}
export default Main;