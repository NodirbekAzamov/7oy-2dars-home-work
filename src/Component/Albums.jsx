import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Albums() {
  const [albums, setAlbums] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 10
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = albums.slice(firstIndex, lastIndex);
  const result = Math.ceil(albums.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then(res => {
      setAlbums(res.data)
    });
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
        <div className="col-12">
          <table className='table table-dark table-bordered table-striped'>
            <thead>
              <tr className='text-center fs-5'>
                <th>T/R</th>
                <th>userId</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
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
