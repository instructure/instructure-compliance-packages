// Modules
import { Billboard, Text, Link } from '@instructure/ui'

// Components
const homeText = () => {
  return(
    <Text>
      Uhm... <Link href="./#/">class dismissed</Link>.
    </Text>
  )
}

// Page
export default function Root() {
  return (
    <Billboard
      size="medium"
      heading="Well, that's a 404."
      headingAs="h1"
      message={homeText}
    />
  )
}