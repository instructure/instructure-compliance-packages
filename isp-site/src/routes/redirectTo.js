// Modules
import { Text, View, Link } from "@instructure/ui"
import { useEffect } from "react"

// Page
function RedirectTo(props) {
    let url = props.url
    let brand = props.brand
    let path = props.path
    let filetype = url.slice(-4)
    let download = (path.slice(-3) === "/dl")

    useEffect((url) => {
      window.location.href = url
    },[])

    if(download) {
      return (
        <View as="div">
          <Text>You're downloading { (filetype === ".zip") ? "the" : "a document from the"  } {brand} security package!</Text>
          <br />
          <Text size="x-small">Didn't work? <Link href={url}>Try again</Link></Text>
        </View>
      )
    }
  }

export default RedirectTo