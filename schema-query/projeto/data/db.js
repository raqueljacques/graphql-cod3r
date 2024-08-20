const profiles = [
    {
        id: 1,
        name: "common",
    },
    {
        id: 2,
        name: "admin",
    },
];

const users = [
    {
        id: 1,
        name: "João Silva",
        email: "joão@email.com",
        age: 29,
        profile_id: 1,
        status: "ACTIVE",
    },
    {
        id: 2,
        name: "Rafael Junior",
        email: "rafael@email.com",
        age: 31,
        profile_id: 2,
        status: "INACTIVE",
    },
    {
        id: 3,
        name: "Daniela Smith",
        email: "daniela@email.com",
        age: 24,
        profile_id: 1,
        status: "BLOCKED",
    },
];

module.exports = { users, profiles };
