import React from 'react'
import UrlForm from './UrlForm'

const UrlShortener = () => {
  return (
    <div className='url-shortener px-5 py-4 rounded shadow-sm text-white'>
      <h2 className="text-center mb-4 fw-bold">Url shortener</h2>
      <UrlForm />
    </div>
  )
}

export default UrlShortener