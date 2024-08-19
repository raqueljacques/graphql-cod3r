const { users, profiles } = require("../data/db");

module.exports = {
    hello: () => "Hello, world!",
    currentTime: () => new Date().getHours() + ":" + new Date().getMinutes(),
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
    user: (_, { id }) => {
        const selected = users.filter((user) => user.id == id);
        return selected ? selected[0] : null;
    },
    profiles: () => profiles,
    profile: (_, { id }) => {
        const selected = profiles.filter((profile) => profile.id == id);
        return selected ? selected[0] : null;
    },
};
