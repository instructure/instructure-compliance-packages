// Modules
import { useEffect } from "react"

// Variables
const url = "https://www.instructure.com/products/canvas/accessibility"

// Page
function Accessibility() {
    useEffect(() => {
      window.location.href = url
    },[])
  
    return (
      <div>
        <h2>Accessibility...</h2>
      </div>
    )
  }

export default Accessibility