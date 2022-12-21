// Modules
import { Text, View, Link, Billboard } from "@instructure/ui"
import { useEffect } from "react"

// Page
function RedirectTo(props) {
  let url = props.url
  let brand = props.brand
  let path = props.path
  let filetype = url.slice(-4)
  let download = (path.slice(-3) === "/dl")

  useEffect(() => {
    window.location.href = url
  })

  const billboardText = () => {
    if (download) {
      return(
        <View as="div">
          <Text>You're downloading { (filetype === ".zip") ? "the" : "a document from the"  } {brand} security package!</Text>
          <br />
          <Text size="x-small">Didn't work? <Link href={url}>Try again</Link></Text>
        </View>
      )
    } else {
      return (
        <View as="div">
          <Text>Redirecting you to <Link href={url}>{url}</Link></Text>
        </View>
      )
    }
  }
  
  return (
    <Billboard
      size="medium"
      heading={(download) ? "Downloading" : "Redirecting"}
      headingAs="h1"
      message={billboardText}
    />
  )
}

export default RedirectTo
