import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards'
import './Main.css'
import axios from 'axios'

const Main = () => {
    const [url, seturl] = useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d9f6653107f9ba3839b720f4371645f7&hash=24a2cfeedc94e83829f56eb401654a60')
    const [item, setitem] = useState()
    const [search, setsearch] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url)
            setitem(res.data.data.results);
        }
        fetch()
    }, [url])
    const searchMarvel = () => {
        seturl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=d9f6653107f9ba3839b720f4371645f7&hash=24a2cfeedc94e83829f56eb401654a60`)
    }

    return (
        <div className="header">
            <div className="bg">
                <img src="./Images/marvelhero.jpg" alt="marvel" style={{ width: '100%', height: '400px' }} />
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" style={{ width: '100px', height: '100px' }} />
                <input type="search" placeholder='Search Here' className='search' onChange={e => setsearch(e.target.value)}
                    onKeyPress={searchMarvel} />
            </div>
            <div className="content">
                <Cards />
                {
                    (!item) ? <p>Not Found</p> : <Cards data={item} />
                }
            </div>
        </div>


    )
}

export default Main
