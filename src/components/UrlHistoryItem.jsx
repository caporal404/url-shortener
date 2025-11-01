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
        <div className="">
          <div>https://facebook.com</div>
          <div>http://bit.ly/hbi86tfy</div>
        </div>

        <button className="btn p-0"
          style={{
            transform: "scale(2)"
          }}>
          <i className="bi bi-grip-vertical" />
        </button>
      </div>
      
      <div className="d-flex justify-content-between align-items-center mt-2 pt-1"
        style={{
          borderTop : "1px solid #bbb"
        }}
      >
        <div className="fw-bold"
          style={{
            color : "#666",
            transform : "scale(0.85)"
          }}
        >
          <span>
            <i className="bi bi-clock mx-2"/>
            {formattedTime}
          </span>
          <span className="mx-3">
            <i className="bi bi-calendar mx-2" />
            {formattedDate}
          </span>
        </div>

        <div className="">
          <button className="btn text-success p-0 mx-3">
            <i className="bi bi-clipboard" /> Copy
          </button>
          <button className="btn text-danger p-0">
            <i className="bi bi-trash" /> Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UrlHistoryItem