import axios from 'axios'
import './Marvel.css'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Marvel = () => {
    const {id}=useParams()
    const [url, seturl] = useState(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=d9f6653107f9ba3839b720f4371645f7&hash=24a2cfeedc94e83829f56eb401654a60`)
    const [item, setitem]=useState()
    useEffect(() => {
      const fetch=async()=>{
        const res=await axios.get(url)
        setitem(res.data.data.results[0]);
      }
      fetch()
    }, [url])

  return (
    <>
        {(!item)?'':(
            <div className="box-content">
                <div className="right-box">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                </div>
                <div className="left-box">
                    <h1>{item.name}</h1>
                    <h4>{item.description}</h4>
                </div>
            </div>
        )}
      
      </>
  )
}

export default Marvel
