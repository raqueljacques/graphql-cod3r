let id = 1;
function nextId() {
    return id++;
}

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
        id: nextId(),
        name: "João Silva",
        email: "joão@email.com",
        age: 29,
        profile_id: 1,
        status: "ACTIVE",
    },
    {
        id: nextId(),
        name: "Rafael Junior",
        email: "rafael@email.com",
        age: 31,
        profile_id: 2,
        status: "INACTIVE",
    },
    {
        id: nextId(),
        name: "Daniela Smith",
        email: "daniela@email.com",
        age: 24,
        profile_id: 1,
        status: "BLOCKED",
    },
];

module.exports = { users, profiles, nextId };
