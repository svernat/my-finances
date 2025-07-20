# OIDC Authentication Setup for MyFinances Backend

This document explains how to set up and use OpenID Connect (OIDC) authentication for the MyFinances backend application.

## Overview

The MyFinances backend is protected by OIDC authentication using Spring Security. This means that:

- All API endpoints (except for Actuator endpoints) require authentication
- Authentication is handled by an external OIDC provider
- The application acts as both an OAuth2 client and a resource server

## Configuration

The OIDC authentication is configured in the following files:

- `SecurityConfig.java`: Configures Spring Security with OIDC authentication
- `application.yml`: Contains the OIDC provider details and other configuration properties

### OIDC Provider Configuration

You need to configure the OIDC provider details in the `application.yml` file or through environment variables. The following properties are available:

| Environment Variable | Description | Default Value |
|---------------------|-------------|---------------|
| `OIDC_CLIENT_ID` | The client ID for the OIDC provider | myfinances-client |
| `OIDC_CLIENT_SECRET` | The client secret for the OIDC provider | myfinances-secret |
| `OIDC_ISSUER_URI` | The issuer URI for the OIDC provider | https://your-oidc-provider/ |
| `OIDC_AUTHORIZATION_URI` | The authorization URI for the OIDC provider | https://your-oidc-provider/authorize |
| `OIDC_TOKEN_URI` | The token URI for the OIDC provider | https://your-oidc-provider/token |
| `OIDC_USER_INFO_URI` | The user info URI for the OIDC provider | https://your-oidc-provider/userinfo |
| `OIDC_JWK_SET_URI` | The JWK set URI for the OIDC provider | https://your-oidc-provider/.well-known/jwks.json |

### Setting Up with Common OIDC Providers

#### Auth0

For Auth0, you need to:

1. Create an Auth0 account and a new application
2. Configure the application as a Regular Web Application
3. Set the Allowed Callback URLs to `http://localhost:8080/api/login/oauth2/code/myfinances-oidc`
4. Set the environment variables:
   ```
   OIDC_CLIENT_ID=your-auth0-client-id
   OIDC_CLIENT_SECRET=your-auth0-client-secret
   OIDC_ISSUER_URI=https://your-auth0-domain/
   OIDC_AUTHORIZATION_URI=https://your-auth0-domain/authorize
   OIDC_TOKEN_URI=https://your-auth0-domain/oauth/token
   OIDC_USER_INFO_URI=https://your-auth0-domain/userinfo
   OIDC_JWK_SET_URI=https://your-auth0-domain/.well-known/jwks.json
   ```

#### Keycloak

For Keycloak, you need to:

1. Set up a Keycloak server and create a new realm
2. Create a new client with the client ID `myfinances-client`
3. Set the Valid Redirect URIs to `http://localhost:8080/api/login/oauth2/code/myfinances-oidc`
4. Set the environment variables:
   ```
   OIDC_CLIENT_ID=myfinances-client
   OIDC_CLIENT_SECRET=your-client-secret
   OIDC_ISSUER_URI=http://localhost:8180/realms/your-realm
   OIDC_AUTHORIZATION_URI=http://localhost:8180/realms/your-realm/protocol/openid-connect/auth
   OIDC_TOKEN_URI=http://localhost:8180/realms/your-realm/protocol/openid-connect/token
   OIDC_USER_INFO_URI=http://localhost:8180/realms/your-realm/protocol/openid-connect/userinfo
   OIDC_JWK_SET_URI=http://localhost:8180/realms/your-realm/protocol/openid-connect/certs
   ```

## Testing the Authentication

### Test Controller

A test controller (`TestController.java`) has been created to demonstrate how the security configuration works in practice. The controller provides the following endpoints:

- `GET /`: Returns a simple message and is protected by OIDC authentication
- `GET /user`: Returns information about the authenticated user and is protected by OIDC authentication

### Testing Process

To test the authentication:

1. Start the application
2. Try to access a protected endpoint, e.g., `http://localhost:8080/api/`
3. You should be redirected to the OIDC provider's login page
4. After successful authentication, you should be redirected back to the application
5. Access the `/user` endpoint to see information about your authenticated user

You can also use tools like Postman or curl to test the authentication with JWT tokens. For example:

```bash
# Get a JWT token from your OIDC provider
TOKEN=your-jwt-token

# Access the protected endpoint
curl -H "Authorization: Bearer $TOKEN" http://localhost:8080/api/

# Get user information
curl -H "Authorization: Bearer $TOKEN" http://localhost:8080/api/user
```

## Troubleshooting

If you encounter issues with the authentication:

1. Check the application logs for detailed error messages
2. Verify that the OIDC provider details are correctly configured
3. Ensure that the redirect URIs are correctly set up in the OIDC provider
4. Check that the client ID and client secret are correct

For more detailed debugging, you can increase the log level for Spring Security OAuth2:

```yaml
logging:
  level:
    org.springframework.security: DEBUG
    org.springframework.security.oauth2: DEBUG
```

## Security Considerations

- Always use HTTPS in production
- Keep the client secret secure
- Regularly rotate the client secret
- Use environment variables or a secure configuration service for sensitive information
- Consider using a more restrictive scope for the OIDC provider