const UrlHistoryItem = () => {
  const date = new Date();
  
  const formattedDate = date.toLocaleDateString('en-GB', {
    day : 'numeric',
    month : 'short' 
  })
  
  const formattedTime = date.toLocaleTimeString('en-GB', {
    hour : '2-digit',
    minute : '2-digit',
    hour12 : false
  })

  return (
    <div className="url-history-item px-3 py-2 rounded bg-light">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex w-100">
          <div className="w-50">
            <div className="fw-bold text-second">Original link:</div>
            <div className="text-primary">
              <i className="bi bi-globe text-second me-1" />https://facebook.com
            </div>
          </div>

          <div className="">
            <div className="fw-bold text-second">Shorten link:</div>
            
            <div className="text-primary">
              <i className="bi bi-link-45deg text-main me-1" />http://bit.ly/hbi86tfy
              <button className="btn p-0 scale-85 ms-3 text-success fw-bold">
                <i className="bi bi-clipboard" />
              </button>
            </div>
          </div>
        </div>

        <button className="btn p-0 text-main scale-200">
          <i className="bi bi-grip-vertical" />
        </button>
      </div>
      
      <div className="d-flex justify-content-between align-items-center mt-2 pt-1 border-top border-secondary">
        <div className="text-secondary scale-85">
          <span>
            <i className="bi bi-clock me-2"/>
            {formattedTime}
          </span>
          <span className="ms-4">
            <i className="bi bi-calendar me-2" />
            {formattedDate}
          </span>
        </div>

        <button className="btn text-danger p-0">
          <i className="bi bi-trash" /> Delete
        </button>
      </div>
    </div>
  )
}

export default UrlHistoryItem