import { useEffect, useState } from "react"
import { getData } from "./components/services"
import ShowList from "./components/ShowList"

function Main() {
    const [data , setData]= useState([])

    useEffect(()=>{
        getData.then(res=>setData(res.products)).catch(e=>console.log(e))
    },[data])
    
    console.log(data)

    return (
        <>

        <div>
         {data.map((e)=>(
            <div>
            <h1>{e.title}</h1>
            <img src={e.images[0]} alt={e.title}></img>
            <p>{e.description}</p>
            </div>
           ))}
        </div>
            
          <div>
          <ShowList products={data}/>
          </div>
           
         
        </>
    )
}

export default Main

