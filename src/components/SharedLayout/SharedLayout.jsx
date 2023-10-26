import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
        <Header>
        <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
        </Header>
        <main>
        <Outlet />
        </main>
    </Container>
  )
}

export default SharedLayout