const { ApolloServer, gql } = require("apollo-server");

const users = [
    {
        id: 1,
        name: "João Silva",
        email: "joão@email.com",
        age: 29,
    },
    {
        id: 2,
        name: "Rafael Junior",
        email: "rafael@email.com",
        age: 31,
    },
    {
        id: 3,
        name: "Daniela Smith",
        email: "daniela@email.com",
        age: 24,
    },
];

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

    type Product {
        name: String!
        price: Float!
        discount: Float
        priceWithDiscount: Float
    }

    # API entry points
    type Query {
        hello: String!
        currentTime: Hour!
        loggedUser: User
        exampleProduct: Product
        lotteryNumbers: [Int!]!
        users: [User]
    }
`;

const resolvers = {
    User: {
        salary: (user) => user.salary_real,
    },
    Product: {
        priceWithDiscount: (product) => {
            if (product.discount) {
                return product.price * (1 - product.discount);
            } else {
                return product.price;
            }
        },
    },
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
                salary_real: 1000.0,
                vip: true,
            };
        },
        exampleProduct: () => {
            return {
                name: "Product 1",
                price: 100.0,
                discount: 0.5,
            };
        },
        lotteryNumbers: () => {
            const crescent = (a, b) => a - b;
            const numbers = [];

            while (numbers.length < 6) {
                const number = parseInt(Math.random() * 60 + 1);
                if (!numbers.includes(number)) {
                    numbers.push(number);
                }
            }
            return numbers.sort(crescent);
            // return Array(6)
            //     .fill(0)
            //     .map((n) =>
            //         checkIfAlreadyExists(parseInt(Math.random() * 60 + 1))
            //     )
            //     .sort(crescent);
        },
        users: () => users,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
