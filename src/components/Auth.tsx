import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  IconGithubLine,
  SourceCodeEditor,
  View,
} from "@instructure/ui";
import strings from "../strings/auth.ts";
import { getStrings } from "../utils/langs.ts";

/**
 * Component that renders the footer.
 *
 * @param language - The language code.
 * @returns A React node representing the footer.
 */
function Auth({ language }: { language: LangCode }): JSX.Element {
  const l = language;
  const s = getStrings(strings, l);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <View id="auth">
      {!isAuthenticated && (
        <Button
          renderIcon={() => <IconGithubLine />}
          onClick={() => loginWithRedirect()}
        >
          {s.login_with_github}
        </Button>
      )}
      {isAuthenticated && (
        <>
          <Button onClick={() => logout()} margin="0 0 small">
            {s.logout}
          </Button>
          <SourceCodeEditor
            language="json"
            label="user-info"
            value={JSON.stringify(user, null, 2)}
          />
        </>
      )}
    </View>
  );
}

export default Auth;
