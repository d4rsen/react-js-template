import ReactDOM from 'react-dom'
import App from '../App/App'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App/>, div)
})
