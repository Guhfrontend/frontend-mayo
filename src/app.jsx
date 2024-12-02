import { BrowserRouter } from 'react-router-dom'
import './app.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

export function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="divTop">
          <Home />
        </div>
      </BrowserRouter>

    </>
  )
}
