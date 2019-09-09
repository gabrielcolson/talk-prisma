const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');

import { User } from './services/users/User';
import { Post } from './services/posts/Post';
import users from './services/users/controller';
import posts from './services/posts/controller';

const schema = makeExecutableSchema({
  typeDefs: readFileSync('schema.graphql', 'utf8'),

  resolvers: {
    Query: {
      users: async () => await users.getAll(),
      user: async (_: void, { id }: { id: number }) => await users.getOne(id),

      posts: async () => await posts.getAll(),
      postsOf: async (_: void, { authorId }: { authorId: number }) => await posts.getByAuthor(authorId),
      post: async (_: void, { id }: { id: number }) => await posts.getOne(id),
    },

    Mutation: {
      addUser: async (_: void, user: User) => {
        const { firstname, lastname } = user;
        await users.create(firstname, lastname);

        return true;
      },
      deleteUser: async (_: void, { id }: { id: number }) => {
        await users.remove(id);

        return true;
      },

      addPost: async (_: void, post: Post) => {
        const { authorId, title, content } = post;
        await posts.create(authorId, title, content);

        return true;
      },
      deletePost: async (_: void, { id }: { id: number }) => {
        await posts.remove(id);

        return true;
      },
    },
  },
});

module.exports = schema;