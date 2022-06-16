import Button from '../components/common/Button/Button'
import Input from '../components/common/Input/Input'
import Footer from '../components/ui/Footer/Footer'
import Header from '../components/ui/Header/Header'
import Router from '../router/Router'
import './App.scss'

const App = () => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Router />
                <Footer />
                <Input />
                <Button text={'click me'} />
            </div>
        </>
    )
}

export default App
