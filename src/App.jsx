import { Route, Routes } from 'react-router-dom'
import './App.css'
import UrlShortener from './pages/UrlShortener'
import UrlHistory from './pages/UrlHistory'
import Layout from './components/Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route path='' element={ <UrlShortener /> } />
        <Route path='history' element={ <UrlHistory /> } />
      </Route>
    </Routes>
  )
}

export default App
