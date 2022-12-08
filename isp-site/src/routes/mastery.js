// Modules
import { Link, View, Text } from '@instructure/ui'

// Components

// URLs
const url_prefix = "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/"
const url_postfix = ".zip"
const mastery_connect_url = `${url_prefix}mastery-connect${url_postfix}`


// Page
export default function Mastery() { return (
  <View as="div">
    <Text>Download the <Link href={mastery_connect_url}>Mastery Connect</Link> security package.</Text>
  </View>
)}