import * as path from 'path';
import { stringArg } from 'nexus';
import { GraphQLServer } from 'graphql-yoga';
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma';

import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';


const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields([
      'post',
      'posts',
    ]);
  },
});

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields([
      'createUser',
      'deletePost',
      'createPost',
    ]);
    t.field('deletePostsOf', {
      type: 'BatchPayload',
      args: { firstname: stringArg() },
      resolve: (_, { firstname }, ctx) => ctx.prisma
        .deleteManyPosts({
          author: {
            firstname,
          },
        }),
    });
  },
});

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, './src/generated/schema.graphql'),
    typegen: path.join(__dirname, './src/generated/nexus.ts'),
  },
});

const server = new GraphQLServer({
  schema,
  context: { prisma },
});

server.start(() => console.log('Server is running on http://localhost:4000!'));
