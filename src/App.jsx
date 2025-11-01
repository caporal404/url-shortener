import { Fragment } from 'react'
import './App.css'
import Header from './components/Header'
// import UrlHistory from './components/UrlHistory'
import UrlShortener from './components/UrlShortener'

function App() {

  return (
    <>
      <Header />
      <div className="App w-100 vh-100 d-flex flex-column justify-content-center align-items-center gap-4">
        <UrlShortener />
        {/* <UrlHistory /> */}
      </div>
    </>
  )
}

export default App
