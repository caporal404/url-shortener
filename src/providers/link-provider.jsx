import { createContext, useContext } from 'react'
// import { toast } from 'react-toastify';

const LinkContext = createContext();
export const useLinks = () => useContext(LinkContext) 

const linkProvider = ({ children }) => {
  // Sends a POST request to the Bitly API to shorten a given long URL. 
  const shorten = async (longUrl) => {
    const token = import.meta.env.VITE_BITLY_TOKEN;
    if (!token) {
      throw new Error("Le token Bitly n'est pas défini.");
    }

    // Request to the API
    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": longUrl })
    });

    // Check if the response is corect
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Une erreur s'est produite lors du raccourcissement du lien.");
    }

    const data = await response.json();
    return data.link; // The API returns the shortened URL in 'link' field
  }

  return (
    <LinkContext.Provider value={{
      shorten
    }}>
      {children}
    </LinkContext.Provider>
  )
}

export default linkProvider