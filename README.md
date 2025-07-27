# my-finances
L'application MyFinances permet de gérer les comptes bancaires de plusieurs utilisateurs. Chacun pouvant avoir plusieurs comptes.
Elle permet de gérer et simuler les épargnes, les emprunts et les gestions locatives.

## Base technique
MyFinances est une application WEB composé d'un Frontend et d'un Backend.

## Frontend
Le Frontend est une Single Page Application (SPA) qui s'appuie sur le langage Javascript / Typescript, la librairie React et l'outil de build Vite.

### Structure du Frontend
Le Frontend est organisé selon la structure standard d'un projet React avec Vite :
- `src/` : Contient le code source de l'application
  - `assets/` : Contient les ressources statiques (images, etc.)
  - `components/` : Contient les composants réutilisables (à créer)
  - `App.tsx` : Le composant principal de l'application
  - `main.tsx` : Le point d'entrée de l'application
- `public/` : Contient les fichiers statiques accessibles publiquement

## Backend
Le Backend s'appuie sur le langage Java et le framework Spring Boot.
Il va se structurer sur une architecture Héxagonale et de type Monolithique Modulaire (ou Modulith).
La modularité du monolithe s'appuiera sur un découpage fonctionnel pour respecter le pattern DDD (Domain Driven Design).

## Développement
Nous appliquons les principes du Clean Code principalement proposés par Robert C. Martin.

Nous utilisons le pattern TDD (Test Driven Development) avec ses 3 étapes :
- Développement des Tests
- Écriture du code pour faire passer les tests
- Refactoring pour améliorer le code

Nous utilisons les assistants de codage pour chacune de ses 3 étapes tout en respectant les principes du Clean Code, le pattern DDD et l'architecture Héxagonale.

## Gestion de configuration
On est dans un repository unique avec le Frontend, le Backend et la documentation.

## Compilation et exécution
### Compilation et exécution du backend
Depuis le répertoire backend, lancer la commande
```bash
mvn -U clean package
```

### Compilation et exécution du frontend
Pour exécuter le Frontend en mode développement :
```bash
cd frontend
npm install
npm run dev
```

L'application sera accessible à l'adresse http://localhost:5173 (port par défaut de Vite).

Pour construire l'application pour la production :
```bash
cd frontend
npm install
npm run build
```

Les fichiers de production seront générés dans le répertoire `dist/`. Vous pouvez ensuite servir ces fichiers avec un serveur web statique.