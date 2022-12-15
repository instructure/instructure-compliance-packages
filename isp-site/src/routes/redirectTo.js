// Modules
import { Text, View } from "@instructure/ui"
import { useEffect } from "react"
import { Link } from "react-router-dom"

// Page
function RedirectTo(props) {
    let url = props.url

    useEffect(() => {
      window.location.href = url
    },[])

    if(url.slice(-4) === ".zip") {
      return (
        <View as="div">
          <Text>You're downloading a security package!</Text>
          <br />
          <Text size="x-small">Didn't work? <Link href={url}>Try again</Link></Text>
        </View>
      )
    }
  }

export default RedirectTo