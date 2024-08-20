const { users, profiles } = require("../data/db");

module.exports = {
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
