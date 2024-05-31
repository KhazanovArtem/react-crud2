import React, { useState, useEffect } from 'react'
import { Post } from './Post';

export  const Home = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7778/posts")
        .then(response => response.json())
        .then(data => {
            setList(data);
            setLoading(false);
        })
    }, [loading])

  return (
    <>
        {loading && <p>Loading</p>}
        <div className='posts'>
            {list.map(item => <Post key={item.id} id={item.id} data={item}/>).reverse()}
        </div>
    </>
  )
}
