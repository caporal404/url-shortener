import UrlHistoryItem from "../components/UrlHistoryItem"

const UrlHistory = () => {
  return (
    <div className='url-history mt-5'>
      <div className="d-flex justify-content-between align-items-center mb-5 text-white">
        <h3 className="fw-bold mx-4">Url history</h3>
        <button className="btn bg-primary text-white px-4 mx-2">
          <i className="bi bi-trash" /> Clear all
        </button>
      </div>

      <div className="d-flex flex-column gap-4">
          <UrlHistoryItem />
          <UrlHistoryItem />
          <UrlHistoryItem />
      </div>
    </div>
  )
}


export default UrlHistory