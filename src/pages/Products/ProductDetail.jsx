import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {

   let {id} = useParams() 

    const [product, setProduct] = useState({})

    const axiosGet = async()=>{
        let response = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(response.data)
        console.log(response.data)
    }

    useEffect(() => {
      axiosGet()
    }, [])
    

  return (
    <>
      <div className="card" style={{ marginRight: 18 + "em" }}>
        <img
          src={`https://i.dummyjson.com/data/products/${id}/3.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <p className="card-text">{product.category}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price} TL</p>
          <a href="#" className="btn btn-primary">
            Satın Al
          </a>
        </div>
      </div>
    </>
  );
}
