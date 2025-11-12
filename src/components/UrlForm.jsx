import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { useLinks } from "../providers/link-provider"
import ShortenedUrl from "./ShortenedUrl"

const UrlForm = () => {
  const { shorten } = useLinks()
  const [longUrl, setLongUrl] = useState("")
  const [shortenUrl, setShortenUrl] = useState("")
  const [status, setStatus] = useState("idle") // idle | pending | success

  const handleChange = (e) => {
    setLongUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (longUrl.trim() !== "") 
      setStatus("pending")
    else {
      toast("Link is empty")
    }
  }

  useEffect(() => {
    if (status === "pending") {
      (async () => {
        try {
          // Displays toast notifications for the request's pending, success, and error states.
          const response = await toast.promise(
            shorten(longUrl),
            // States for the Toast
            {
              pending : "Shortening your link...",
              success: "Link shortened successfully!",
              error: "Error shortening the link."
            }
          );

          setStatus("success")
          setShortenUrl(response)
          console.log(response)
          setLongUrl("") // Clear the input field after shortening
        } catch (error) {
          console.error("Error shortening URL:", error)
          setStatus("idle")
        }
      })() // Immediately invoke function
    }
  },[status])

  return (
    <>
      <ToastContainer position="top-center"/>
      <form className="url-form form" onSubmit={handleSubmit}>
        <div className="d-flex">
          <input 
            type="text" 
            className="form-control py-2" 
            placeholder="Enter the link..."
            value={longUrl}
            onChange={handleChange}
            required
            disabled={status === "pending"}
          />
          <button className="btn px-4" type="submit">Shorten</button>
        </div>
      </form>

      <ShortenedUrl />
    </>
  )
}

export default UrlForm