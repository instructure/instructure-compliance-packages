// Modules
import { View, Billboard, Text, Link } from '@instructure/ui'

// Page
function NotFound() {
  return (
    <View
      id="main"
      as="div"
      padding="medium medium xx-large"
      minWidth="20rem"
      maxWidth="59.25rem"
      margin="0 auto" 
    >
      <Billboard
        size="medium"
        heading="Well, that's a 404."
        headingAs="h1"
        message={ <Text>Uhm... <Link href="./#/">class dismissed</Link>.</Text> }
      />
    </View>
  )
}

export default NotFound
