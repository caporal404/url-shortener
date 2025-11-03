import React from 'react'

const ShortenedUrl = () => {
  return (
    <div className="shortened-url mt-3 p-3 rounded">
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <span className="">
            <i className="bi bi-link-45deg" /> Shortened URL:
          </span>
          <div 
            className="mx-3 text-primary"
            style={{
              fontSize : "1.1rem"
            }}
          >http://bit.ly/hbi86tfy</div>
        </div>

        <button className="btn bg-success px-3 text-white">
          <i className="bi bi-clipboard" /> Copy
        </button>
      </div>
    </div>
  )
}

export default ShortenedUrl