const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    scalar Hour

    type User {
        id: ID!
        name: String
        email: String
        age: Int
        salary: Float
        vip: Boolean
    }

    # API entry points
    type Query {
        hello: String!
        currentTime: Hour!
        loggedUser: User
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello, world!",
        currentTime: () =>
            new Date().getHours() + ":" + new Date().getMinutes(),
        loggedUser: () => {
            return {
                id: 1,
                name: "test",
                email: "test@mail.com",
                age: 30,
                salary: 1000.0,
                vip: true,
            };
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
