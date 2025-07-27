# The steps to generate source code using GenAI (Junie)
## Initialisation du projet
### Initialisation du backend
#### Création du module parent my-finances-backend-parent
```
Créer un module maven parent my-finances-backend-parent pour un backend Spring Boot 3.5.3 et Java 21
```

#### Création du lanceur de l'application MyFinances
```
Créer le module my-finances-app du lanceur de l'application Spring Boot MyFinances
```

#### Ajoute le monitoring de l'application avec Actuator
```
Ajoute le monitoring de l'application avec Spring Boot Actuator
```

### Initialisation du frontend
```
Initialise une application web avec React et Vite
```
Mais l'application est générée en Javascript au lieu de Typescript.
```
Utiliser TypeScript pour le frontend au lieu de JavaScript.
```

### Protège le backend par une authentification OIDC
```
Protège le backend par une authentification OIDC avec Spring Security 
```

### Protège le frontend par une authentification OIDC
```
sur l'application web, ajoute l'authentification OIDC avec keycloak sur le host localhost et le port 9100 sur le royaume MyHome et le client publique MyFinances-web, la configuration OIDC est disponible ici http://localhost:9100/realms/MyHome/.well-known/openid-configuration
```
Il y a une page avec un bouton login sur lequel il faut cliquer pour rediriger vers Keycloak.
Je vais demander à rediriger vers la page de connexion de Keycloak directement si on n'est pas encore connecté.
```
en frontend, pourriez-vous supprimer la page de connexion et rediriger directement vers keycloak si vous n'êtes pas authentifié ?
```
