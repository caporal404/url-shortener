
const UrlHistory = () => {
  return (
    <div className='url-history mt-5 text-white'>
      <div className="d-flex justify-content-between align-items-cente mb-3">
        <h3 className="fw-bold mx-4">Url history</h3>
        <button className="btn bg-primary text-white px-4 mx-2">
          <i className="bi bi-trash" /> Clear all
        </button>
      </div>

      <table className="table table-hover text-center align-middle">
        <thead className="fs-5 text-secondary">
          <th>Long url</th>
          <th>Shorten url</th>
          <th>Action</th>
        </thead>
        <tbody className="table-group-divider gap-5">
          <UrlHistoryRow />
          <UrlHistoryRow />
          <UrlHistoryRow />
        </tbody>
      </table>
    </div>
  )
}

const UrlHistoryRow = () => {
  return (
    <tr className="">
      <td>https://facebook.com</td>
      <td>http://bit.ly/hbi86tfy</td>
      <td>
        <button className="btn bg-success text-white">
          <i className="bi bi-clipboard" />
        </button>
      </td>
    </tr>
  )
}

export default UrlHistory