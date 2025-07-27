import { useAuth as useOidcAuth } from "oidc-react";

export const useAuth = () => {
  const auth = useOidcAuth();

  const logout = async () => {
    try {
      await auth.signOutRedirect();
    } catch (error) {
      console.error(error);
      await auth.signOut();
      window.location.href = "/";
    }
  };

  const login = async () => {
    try {
      await auth.signIn();
    } catch (error) {
      console.error(error);
      window.location.href = "/";
    }
  };

  return {
    user: auth.userData,
    isAuthenticated: !!auth.userData && !auth.userData.expired,
    isLoading: auth.isLoading,
    login,
    logout,
    token: auth.userData?.access_token ?? null,
  };
};
