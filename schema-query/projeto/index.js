const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    # API entry points
    type Query {
        hello: String!
        currentTime: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello, world!",
        currentTime: () =>
            new Date().getHours() + ":" + new Date().getMinutes(),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
