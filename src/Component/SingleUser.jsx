import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.scss"

export default function SingleUser() {
    const [single_product, setSingle_product] = useState({})
    const id = +window.location.href.split("/")[4]
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setSingle_product(res.data)
        })
    }, [])

    return (
        <div>

            <div className='container'>

                <div className="single_row2 row">
                    <div className="single_box1 col-6">
                        <img src={single_product.image} alt="img" className='single_img' />
                    </div>
                    <div className="col-6">
                        <h3>{single_product.title}</h3>
                        <h4 className=' text-primary'>Category: <span className=' text-dark'>{single_product.category}</span> </h4>
                        <p className=' text-dark'>Price: <span className=' text-warning' >${single_product.price}</span></p>
                        <p><span>Product description</span> <br /> <hr /> {single_product.description}</p>
                        <button className='btn btn-success '>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
