export const oidcConfig = {
  authority: 'http://localhost:9100/realms/MyHome',
  clientId: 'MyFinances-web',
  redirectUri: window.location.origin,
  responseType: 'code',
  scope: 'openid profile email',
  automaticSilentRenew: true,
  loadUserInfo: true,
  postLogoutRedirectUri: window.location.origin,
  revokeAccessTokenOnSignout: true,
};
