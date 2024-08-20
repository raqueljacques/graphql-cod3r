const { users, nextId } = require("../../data/db");

function userIndex(filter) {
    if (!filter) return -1;
    const { id, email } = filter;
    if (id) {
        return users.findIndex((user) => user.id == id);
    } else if (email) {
        return users.findIndex((user) => user.email === email);
    }
    return -1;
}
module.exports = {
    //{ name, email, age }
    newUser(_, { data }) {
        const emailExist = users.some((user) => user.email === data.email);

        if (emailExist) {
            throw new Error("E-mail already registered");
        }

        const user = {
            id: nextId(),
            ...data,
            profile_id: 1,
            status: "ACTIVE",
        };
        users.push(user);
        return user;
    },
    deleteUser(_, { filter }) {
        const i = userIndex(filter);
        if (i < 0) return null;
        const excluded = users.splice(i, 1);
        return excluded ? excluded[0] : null;
    },
    changeUser(_, { data, filter }) {
        const i = userIndex(filter);
        if (i < 0) return null;
        users[i].name = data.name ? data.name : users[i].name;
        users[i].email = data.email ? data.email : users[i].email;
        users[i].age = data.age ? data.age : users[i].age;
        return users[i];
    },
    changeUserStatus(_, { id, status }) {
        const i = users.findIndex((user) => user.id == id);
        if (i < 0) return null;
        users[i].status = status;
        return users[i];
    },
};
