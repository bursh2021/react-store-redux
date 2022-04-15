import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'
import styled from 'styled-components'
const Wrapper=styled.div`
background: black;
padding: 20px;
`
const Flex=styled.div`
    display: flex;
    justify-content: space-between;
`
const Layout = () => {
    return (
        <>

        <Wrapper>
            <div className='container'>
                <Flex>
                <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/posts">Porduct</CustomLink>
            <CustomLink to="/about">About</CustomLink>
                </Flex>
            </div>
        </Wrapper>

        <main className="container">
            <Outlet />
        </main>

        <footer>&copy; ReactRouter Tutorials 2021</footer>
        </>
    )
}

export {Layout}