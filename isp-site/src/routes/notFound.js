// Modules
import { Billboard, Text, Link } from '@instructure/ui'

// Page
function Root() {
  return (
    <Billboard
      size="medium"
      heading="Well, that's a 404."
      headingAs="h1"
      message={ <Text>Uhm... <Link href="./#/">class dismissed</Link>.</Text> }
    />
  )
}

export default Root
