# Spec Application Talk Prisma

Ce document présente les specs de l'application de démo utilisée dans le talk
Prisma. Il s'agit d'un backend, exposant des ressources.


## Utilisateurs

L'application doit exposer des profils utilisateurs.

Structure d'un profil:

```json
{
  user: {
    id: 0,
    firstname: "firstname",
    lastname: "lastname",
  }
}
```

Le champ `id` est un identificateur primaire, unique.

Il est possible de récupérer tous les utilisateurs d'un coup. Il est possible
d'appliquer de la pagination lorsqu'on récupère tous les utilisateurs.

Il est possible de récupérer un utilisateur par son identifiant unique.

Il est possible d'ajouter un utilisateur. Tous les champs sont alors
obligatoires.

Il est possible de supprimer un utilisateur.


## Publications

L'application expose des publications.

```json
{
  post: {
    id: 0,
    author: 1,
    title: "title",
    content: "content"
  }
}
```

Le champ `id` est un identificateur primaire, unique.

Le champ `author` fait référence à un document du type `user`.

Il est possible de récupérer toutes les publications d'un coup. Il est possible
d'appliquer de la pagination lorsqu'on récupère toutes les publications.

Il est possible de récupérer toutes les publications d'un utilisateur. Il est
possible d'appliquer de la pagination lorsqu'on récupère toutes les
publications d'un utilisateur.

Il est possible de récupérer une publication par son identifiant unique.

Il est possible d'ajouter une publication. Tous les champs sont alors
obligatoires.

Il est possible de supprimer une publication.


## Considérations

L'application doit toujours renvoyer un message en cas d'erreur. Le traitement
de ces messages d'erreur doit pouvoir être uniformisée. La réponse de
l'application en cas d'erreur est donc prédictible.

Supprimer un utilisateur qui dispose de publications ne supprime pas les
publications associées. L'auteur de la publication devient un utilisateur
"inconnu".  Cet utilisateur inconnu ne peut jamais être supprimé.

Supprimer la publication d'un auteur supprime bel et bien la publications.
