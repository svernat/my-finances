# my-finances
L'application MyFinances permet de gérer les comptes bancaires de plusieurs utilisateurs. Chacun pouvant avoir plusieurs comptes.
Elle permet de gérer et simuler les épargnes, les emprunts et les gestions locatives.

## Base technique
MyFinances est une application WEB composé d'un Frontend et d'un Backend.

## Frontend
Le Frontend est une Single Page Application (SPA) qui s'appuie sur le langage Javascript / Typescript et la librairie React.

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
