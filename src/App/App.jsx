import Footer from '../components/ui/Footer/Footer'
import Header from '../components/ui/Header/Header'
import Router from '../router/Router'
import './App.scss'

const App = () => {
    return (
        <>
            <Header/>
            <div className="wrapper">
                <Router/>
                <Footer/>
            </div>
        </>
    )
}

export default App
