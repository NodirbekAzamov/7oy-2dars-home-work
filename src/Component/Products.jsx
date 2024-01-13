import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./style.scss"
export default function Products() {
    const [user, setUser] = useState([])
    const [user_data, setUser_data] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then(res => {
            setUser(res.data)
            setUser_data(res.data)
            console.log(res.data);
        })
    }, [])


    const handleInp = (e) => {
        setUser_data(user.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <input type="text" placeholder='Search...' onChange={handleInp} className='form-control' />
                </div>
            </div>
            <div className="row">
                {
                    user_data?.map((item, index) => {
                        return <div className="col-3" key={index}>
                            <div className="user_card card my-3" >
                                <img src={item.image} alt="img" />
                                <h6 className='text-center pt-3  '>{item.title}</h6>
                                <div className=' bg-warning my-3 rounded-2 w-100 px-4'>
                                    <h5 className=' fs-5 px-1'>Rating {item.rating.rate} <span className=' text-white'>&#9733;</span> </h5>
                                    <h5 className=' fs-5 px-1'>Count: {item.rating.count}</h5>
                                </div>
                                <Link to={`/sengle_user/${item.id}`} className='btn btn-outline-primary mb-5 w-75 mt-2'>Havola</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

{/* <table className="table table-bordered table-striped">
<thead>
    <tr>
        <th>T/R</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Phone</th>
        <th>Wetsite</th>
        <th>Email</th>
        <th>address (city)</th>
        <th>company (name)</th>
        <th></th>
    </tr>
</thead>
<tbody>
    {
        user.map((item, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.company.name}</td>
            </tr>
        })
    }
    {isLoading && "Loading..." }
</tbody>
</table> */}