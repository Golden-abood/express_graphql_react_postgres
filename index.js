const express = require("express");
const app = express();
const port = 5000;
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

let apolloServer;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
