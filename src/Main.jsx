import { useEffect, useState } from "react"
import { getData } from "./components/services"
import ProductDetail from "./productDetail/ProductDetail"

function Main() {
    const [data , setData]= useState([])

    useEffect(()=>{
        getData.then(res=>setData(res.products)).catch(e=>console.log(e))
    },[data])
    
    // console.log(data)

    return (
        <div>
           {data.map((e)=>(
            <div>
            <h1>{e.title}</h1>
            <img src={e.images[0]} alt={e.title}></img>
            <p>{e.description}</p>
            </div>
           ))}

           <ProductDetail product={data[0]}/>
         
        </div>
    )
}

export default Main

