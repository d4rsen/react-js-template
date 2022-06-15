import MainPage from '../pages/MainPage/MainPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

export const publicRoutes = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
]
