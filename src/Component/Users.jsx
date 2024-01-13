import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Users() {
    const [user, setUser] = useState([])
    const [count, setCount] = useState(1)

    const Count_num = 5
    const lastIndex = count * Count_num;
    const firstIndex = lastIndex - Count_num;
    const records = user.slice(firstIndex, lastIndex);
    const result = Math.ceil(user.length / Count_num);
    const numbers = [...Array(result + 1).keys()].slice(1);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setUser(res.data)
            Fn()
        })
    }, [])

    const Fn = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=2&_limit=5`)
            .then(async response => {
                const link = response.headers.get('link') // link to next page (REST)
                const json = await response.json() // data payload
            })
    }

    const count1 = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    const count2 = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className="container">
            <button className='btn btn-success' onClick={count1}>←</button>
            <span className=' fs-4'>{count}</span>
            <button className='btn btn-success' onClick={count2}>→</button>
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-striped">
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
                                records?.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


    
}
