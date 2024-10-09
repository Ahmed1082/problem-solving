import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import '../../styles/singlepost.css'
export default function SinglePost() {
    const {id} = useParams()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const fetchapi = async ()=>{
        try{
            const res = await fetch(`https://fakestoreapi.com/products/${id}`); 
            if(res.status!=200){
                setData([])
            }
            else{ 
                const finalres =  await res.json();
                setData(finalres);
                setLoading(false)}
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchapi() 
    },[id])

    return (
        <div className="singlepost">
        {loading && <Loading />}
        <div className="card">
          <img src={data.image} alt="" />
          <div className="details">
            <h2>{data.title}</h2>
            <p>${data.price}</p>
            <div className="quantity-container">
              <input type="text" className="quantity" value={data.id} readOnly />
              <button>Add to cart</button>
            </div>
            <h3>Product Details</h3>
            <p className="desc">{data.description}</p>
          </div>
        </div>
      </div>
      
  )
}