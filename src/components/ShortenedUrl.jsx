import { Package } from "lucide-react"
import Loader from "./ui/Loader"

const ShortenedUrl = ({ status, shortenedUrl }) => {
  return (
    <div className="shortened-url mt-3 p-3 rounded">
      <div className="d-flex justify-content-center align-items-center">
        {status === "idle" && (
          <div className="text-primary">
            <Package size={80} strokeWidth={1.5}/>
          </div>
        )}

        {status === "loading" && (
          <div className="py-3 text-primary d-flex">
            <Loader />
            <span className="mt-2 ms-3 fw-bold">Shortening...</span>
          </div>
        )}
        
        {status === "success" && (
          <>
            <div className="">
              <span className="">
                <i className="bi bi-link-45deg" /> Shortened URL:
              </span>
              <div 
                className="mx-3 text-primary"
                style={{ fontSize : "1.1rem" }}
              >{ shortenedUrl }</div>
            </div>

            <button 
              className="btn bg-success px-3 text-white"
              onClick={() => navigator.clipboard.writeText(shortenedUrl)}
            >
              <i className="bi bi-clipboard" /> Copy
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ShortenedUrl