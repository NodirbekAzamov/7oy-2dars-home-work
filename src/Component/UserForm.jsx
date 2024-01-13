import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserForm() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users`).then(res => {
            setCards(res.data)
            console.log(res.data);
        })
    }, [])
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-10 offset-1">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>T/R</th>
                                <th>first Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cards?.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name.firstname}</td>
                                        <td>{item.name.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.username}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
