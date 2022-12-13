// Modules
import { useEffect } from "react"

// Page
function RedirectTo(props) {
    useEffect(() => {
      window.location.href = props.url
    },[])
  
    return null
  }

export default RedirectTo