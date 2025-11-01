import UrlHistoryItem from "../components/UrlHistoryItem"

const UrlHistory = () => {
  return (
    <div className='url-history mt-5 text-white'>
      <div className="d-flex justify-content-between align-items-cente mb-3">
        <h3 className="fw-bold mx-4">Url history</h3>
        <button className="btn bg-primary text-white px-4 mx-2">
          <i className="bi bi-trash" /> Clear all
        </button>
      </div>

      <div className="d-flex flex-column gap-3">
          <UrlHistoryItem />
          <UrlHistoryItem />
          <UrlHistoryItem />
      </div>
    </div>
  )
}


export default UrlHistory