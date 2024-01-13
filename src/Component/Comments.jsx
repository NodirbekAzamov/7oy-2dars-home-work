import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 5
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = comments.slice(firstIndex, lastIndex);
  const result = Math.ceil(comments.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
      setComments(res.data)
      console.log(res.data);
    })
  }, [])

  const count1 = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
  }
  const count2 = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className='container'>
      <button className='btn btn-success' onClick={count1}>←</button>
      <span className=' fs-4'>{count}</span>
      <button className='btn btn-success' onClick={count2}>→</button>
      <div className="row my-5">
        <div className="col-10 offset-1">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>T/R</th>
                <th>Body</th>
                <th>Email</th>
                <th>Name</th>
                <th>postId</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.body}</td>
                    <td>{item.email}</td>
                    <td>{item.nama}</td>
                    <td>{item.postId}</td>
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
