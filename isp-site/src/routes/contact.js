// Modules
import { useEffect } from "react"

// Variables
const url = "https://www.instructure.com/contact-us"

// Page
function Contact() {
    useEffect(() => {
      window.location.href = url
    },[])
  
    return (
      <div>
        <h2>Contact...</h2>
      </div>
    )
  }

export default Contact