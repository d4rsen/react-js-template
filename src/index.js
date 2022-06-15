import React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import { store } from './redux/store/store'
import './scss/style.scss'

const container = document.getElementById('root')

const root = ReactDOM.hydrateRoot(container, <App/>)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
