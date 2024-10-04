// auth.js
import { AuthClient } from '@dfinity/auth-client';

export async function initializeAuth() {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => handleAuthenticated(authClient),
    });
  }
}

function handleAuthenticated(authClient) {
  // Add your authentication logic here, for example, update state or redirect.
  console.log("User is authenticated", authClient);
}
