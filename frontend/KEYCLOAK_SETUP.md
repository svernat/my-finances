# Configuration Keycloak pour MyFinances

## Prérequis

- Keycloak doit être en cours d'exécution sur `localhost:9100`
- Le royaume `MyHome` doit être créé
- Le client `MyFinances-web` doit être configuré

## Configuration du client Keycloak

### 1. Créer le client

1. Connectez-vous à l'interface d'administration Keycloak : `http://localhost:9100/admin`
2. Sélectionnez le royaume `MyHome`
3. Allez dans `Clients` > `Create client`
4. Configurez le client avec les paramètres suivants :

### 2. Paramètres généraux

- **Client ID** : `MyFinances-web`
- **Client Type** : `OpenID Connect`
- **Client authentication** : `Off` (client public)

### 3. Paramètres de capacité

- **Standard flow** : `On` (Authorization Code Flow)
- **Direct access grants** : `On` (optionnel)
- **Implicit flow** : `Off`
- **Service accounts roles** : `Off`

### 4. Paramètres de connexion

- **Root URL** : `http://localhost:5175`
- **Home URL** : `http://localhost:5175`
- **Valid redirect URIs** :
  - `http://localhost:5175/callback`
  - `http://localhost:5175/silent-callback.html`
- **Valid post logout redirect URIs** :
  - `http://localhost:5175`
- **Web origins** :
  - `http://localhost:5175`

### 5. Paramètres avancés

- **Access Token Lifespan** : 5 minutes (recommandé pour le développement)
- **Client Session Idle** : 30 minutes
- **Client Session Max** : 12 heures

## Configuration des utilisateurs

### Créer un utilisateur de test

1. Allez dans `Users` > `Add user`
2. Configurez l'utilisateur :
   - **Username** : `testuser`
   - **Email** : `test@example.com`
   - **First name** : `Test`
   - **Last name** : `User`
   - **Email verified** : `On`
   - **Enabled** : `On`

3. Définir un mot de passe :
   - Allez dans l'onglet `Credentials`
   - Cliquez sur `Set password`
   - Entrez un mot de passe
   - Désactivez `Temporary` si vous ne voulez pas forcer le changement

## Vérification de la configuration

### 1. Tester la configuration OIDC

Vérifiez que la configuration OIDC est accessible :
```
http://localhost:9100/realms/MyHome/.well-known/openid-configuration
```

### 2. Paramètres importants à vérifier

Dans la réponse JSON, vérifiez que ces endpoints sont présents :
- `authorization_endpoint`
- `token_endpoint`
- `userinfo_endpoint`
- `end_session_endpoint`

## Démarrage de l'application

1. Assurez-vous que Keycloak est démarré et configuré
2. Démarrez l'application React :
   ```bash
   npm run dev
   ```
3. Accédez à `http://localhost:5173`
4. L'application devrait vous rediriger vers Keycloak pour l'authentification

## Dépannage

### Erreurs courantes

1. **CORS Error** : Vérifiez que `http://localhost:5173` est dans les `Web origins`
2. **Invalid redirect URI** : Vérifiez les `Valid redirect URIs`
3. **Client not found** : Vérifiez que le client `MyFinances-web` existe dans le royaume `MyHome`

### Logs utiles

- Logs Keycloak : Vérifiez les logs du serveur Keycloak
- Console navigateur : Ouvrez les outils de développement pour voir les erreurs JavaScript
- Network tab : Vérifiez les requêtes HTTP vers Keycloak

## Sécurité en production

⚠️ **Important** : Cette configuration est pour le développement uniquement.

Pour la production :
1. Utilisez HTTPS
2. Configurez des URLs de production
3. Ajustez les durées de vie des tokens
4. Configurez des rôles et permissions appropriés
5. Activez la vérification des certificats SSL
