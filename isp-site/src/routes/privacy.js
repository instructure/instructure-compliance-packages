// Modules
import { useEffect } from "react"

// Variables
const url = "https://www.instructure.com/canvas/privacy"

// Page
function Privacy() {
    useEffect(() => {
      window.location.href = url
    },[])
  
    return (
      <div>
        <h2>Privacy...</h2>
      </div>
    )
  }

export default Privacy