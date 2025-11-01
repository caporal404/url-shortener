import React from 'react'
import UrlForm from './UrlForm'

const UrlShortener = () => {
  return (
    <>
      <h2 className="text-center mb-4 fw-bold text-white">Make your links short, smart and shareable.</h2>
      <div className='url-shortener p-5 rounded shadow-sm text-white'>
        <UrlForm />
      </div>
    </>
  )
}

export default UrlShortener