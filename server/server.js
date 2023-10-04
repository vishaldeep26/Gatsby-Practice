const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const productTypeDefs = require('./schema/products/typeDefs');
const productResolvers = require('./schema/products/resolvers');

const startServer = async () => {
  const app = express();
  const typeDefs = mergeTypeDefs([productTypeDefs]);
  const resolvers = mergeResolvers([productResolvers]);

  const server = new ApolloServer({ typeDefs, resolvers });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use('/', expressMiddleware(server));

  app.listen(4000, () => console.log('🚀 Server ready at http://localhost:4000'));
};

startServer();
