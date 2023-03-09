import { useEffect, useState } from "react"
import { getData } from "./components/services"

import ProductDetail from "./productDetail/ProductDetail"

import './main-styles.css'
import ShowList from "./components/ShowList"


function Main() {
    const [data , setData]= useState([])

    useEffect(()=>{
        getData.then(res=>setData(res.products)).catch(e=>console.log(e))
    },[data])
    
    // console.log(data)

    return (
        <>

        <div>
                <h2>Products</h2>
            <div className="container-products">
                {data.map((e)=>(
                    <>
                    <div className="card-products">
                    <button class="dcto2">
                            <span className="descuento">32%</span>
                            dto.
                    </button>
                        <div className="container-img">
                    <img src={e.images[0]} className="img-product" alt={e.title}></img>

                        </div>
                    <div className="product-name">
                        <h4 className="title">{e.title}</h4>
                        <span className="title">
                            <span>
                            s./ 
                            </span>
                            
                            {e.price}</span>

                    </div>
                    <p className="description">{e.description}</p>
                    <button>
                        Add products
                    </button>
                    </div>
                    
                    </>
                ))}

            </div>
           ))}

           <ProductDetail product={data[0]}/>

         
        </div>
            
          <div>
          <ShowList products={data}/>
          </div>
           
         
        </>
    )
}

export default Main

