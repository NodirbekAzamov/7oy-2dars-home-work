import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Photos() {
  const [photos, setPhotos] = useState([])


  const [count, setCount] = useState(1)

  const Count_num = 20
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = photos.slice(firstIndex, lastIndex);
  const result = Math.ceil(photos.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setPhotos(res.data)
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
        {
          records?.map((item, index) => {
            return <div className="col-4">
              <div className='card my-3' key={index}>
                <div className="card-header">
                  <h3>{item.id}</h3>
                </div>
                <div className="card-body">
                  <h3>{item.albumID}</h3>
                  <img src={item.thumbnailUrl} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <div className="card-footer">
                  <img src={item.url} alt="" className=' w-75 h-75' />
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
