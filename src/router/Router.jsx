import React from 'react'
import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './routes'

const Router = () => {
    const routes = useRoutes(publicRoutes)
    return (
        <main className="main">
            {routes}
        </main>

    )
}

export default Router
