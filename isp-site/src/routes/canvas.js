// Modules
import { Link, View, Text, Heading } from '@instructure/ui'

// Components

// URLs
const url_prefix = "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/"
const url_postfix = ".zip"
const canvas_lms_url = `${url_prefix}canvas-lms${url_postfix}`

// Page
export default function Canvas() { return (
  <View as="div">
    <Heading>Canvas</Heading>
    <Text>Download the <Link href={canvas_lms_url}>Canvas LMS</Link> security package.</Text>
  </View>
)}