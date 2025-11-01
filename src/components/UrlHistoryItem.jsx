const UrlHistoryItem = () => {
  return (
    <div className="url-history-item">
      <div>https://facebook.com</div>
      <div>http://bit.ly/hbi86tfy</div>
      <div>
        <button className="btn bg-success text-white">
          <i className="bi bi-clipboard" />
        </button>
        <button className="btn bg-danger text-white">
          <i className="bi bi-trash" />
        </button>
      </div>
      <div className="">
        <span className=""></span>
        <span className=""></span>
      </div>
    </div>
  )
}

export default UrlHistoryItem