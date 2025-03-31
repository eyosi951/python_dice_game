import { useEffect, useState } from "react";
import './style.css'


export default function LoadMoreData(){
    const [loading, setLoading]= useState(false);
    const [products, setProducts]= useState([]);
    const [count, setCount]= useState(0);

    async function fetchProducts(){
        try{
            setLoading(true)
            const  response= await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result =  await response.json();
            console.log(result);
            if(result && result.products && result.products.length){
                setProducts(count === 0 ? result.product : r => [...r, ... result.products]);
               }
               setLoading(false)
        }
        catch(e){
            console.log(e)
            setLoading(false)
        }
}

    useEffect(()=>{
      fetchProducts()
    },[count]);

    if(loading){ return <div className="">Loading ...</div>}

    return <div className="all">
        
    <div className="load-container">
        <ul className="product-container">
            { products && products.length ?
                products.map( (items)=>(
                    <li className="items"
                    key={items.id}>
                        <img src={items.thumbnail} alt={items.title} />
                        <p>{items.title}</p>
                    </li> 
                )) : null
            }
        </ul>
        <div className="btn-container">
            <button onClick={()=> setCount(count + 1)}>add more products</button>
        </div>
    </div>
    </div>
}