import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperFlex=styled.div`
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    font-weight: 800;
`
const ProductPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
  return (
    <WrapperFlex>
        <h1>ProductPage</h1>
        <div>
            {posts.map(p=> <>
                <Link key={p.id} to={`/posts/${p.id}`}>
                        <li>{p.title}</li>
                    </Link>
                 </>)}
        </div>
    </WrapperFlex>
  )
}

export  {ProductPage}