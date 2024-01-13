import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 10
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = posts.slice(firstIndex, lastIndex);
  const result = Math.ceil(posts.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data)
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
    <div className=' container-fluid'>
      <button className='btn btn-success' onClick={count1}>←</button>
      <span className=' fs-4'>{count}</span>
      <button className='btn btn-success' onClick={count2}>→</button>
      <div className="row">
        <div className="col-10 offset-1">
          <table className='table table-bordered table-dark table-striped'>
            <thead>
              <tr className='text-center'>
                <th>T/R</th>
                <th>Body</th>
                <th>Title</th>
                <th>UserId</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.body}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
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
