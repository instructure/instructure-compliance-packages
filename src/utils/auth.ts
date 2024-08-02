const generateAuthCodeVerifier = (): string => {
  // Create an arrayBuffer of 32 bytes
  const arrBuffer = new Uint8Array(32);

  // Fill the arrayBuffer with random values
  window.crypto.getRandomValues(arrBuffer);

  // Convert the arrayBuffer to a base64 encoded string
  const base64String = btoa(String.fromCharCode(...arrBuffer));

  // Convert the base64 string to base64url encoded string
  const codeVerifier = base64URLEncode(base64String);
  return codeVerifier;
};

const generateAuthCodeChallenge = async (): Promise<{
  codeVerifier: string;
  codeChallenge: string;
}> => {
  const codeVerifier = generateAuthCodeVerifier();

  // Convert the code verifier to a Uint8Array (ASCII representation)
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);

  // Compute the SHA-256 hash
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert the hash to a base64 string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const base64String = btoa(String.fromCharCode(...hashArray));

  // Convert the base64 string to base64url
  const codeChallenge = base64URLEncode(base64String);

  return { codeVerifier, codeChallenge };
};

const base64URLEncode = (str: string): string => {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
/**
 * Generates a PKCE (Proof Key for Code Exchange) code verifier and code challenge.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7636|RFC 7636}
 * @returns {Promise<AuthCodeChallenge | undefined>} A promise that resolves to an AuthCode object containing the code verifier and code challenge, or undefined if an error occurs.
 */
//
const PKCE = async (): Promise<AuthCode | undefined> => {
  try {
    const { codeVerifier, codeChallenge } = await generateAuthCodeChallenge();
    return { codeVerifier, codeChallenge };
  } catch (error) {
    console.error(error);
  }
};

export default PKCE;
