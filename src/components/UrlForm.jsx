import ShortenedUrl from "./ShortenedUrl"

const UrlForm = () => {
  return (
    <>
      <form className="url-form form">
        <div className="d-flex">
          <input 
            type="text" 
            className="form-control py-2" 
            placeholder="Enter the link..."
          />
          <button className="btn px-4">Shorten</button>
        </div>
      </form>

      <ShortenedUrl />
    </>
  )
}

export default UrlForm