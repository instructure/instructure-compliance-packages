// Modules
import { Text, View, Link } from "@instructure/ui"
import { useEffect } from "react"

// Page
function RedirectTo(props) {
    let url = props.url
    let brand = props.brand

    useEffect(() => {
      window.location.href = url
    },[])

    if(url.slice(-4) === ".zip") {
      return (
        <View as="div">
          <Text>You're downloading the {brand} security package!</Text>
          <br />
          <Text size="x-small">Didn't work? <Link href={url}>Try again</Link></Text>
        </View>
      )
    }
  }

export default RedirectTo