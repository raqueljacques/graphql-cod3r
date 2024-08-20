const { profiles, nextId } = require("../../data/db");

function indexProfile(filter) {
    if (!filter) return -1;
    const { id } = filter;
    if (id) return profiles.findIndex((profile) => profile.id == id);
    return -1;
}

module.exports = {
    newProfile(_, { data }) {
        const profileAlreadyExists = profiles.some(
            (profile) => profile.name === data.name
        );

        if (profileAlreadyExists) {
            throw new Error("Profile already exists");
        }

        const profile = {
            id: nextId(),
            ...data,
        };
        profiles.push(profile);
        return profile;
    },
    deleteProfile(_, { filter }) {
        const i = indexProfile(filter);
        if (i < 0) return null;
        const excluded = profiles.splice(i, 1);
        return excluded ? excluded[0] : null;
    },
    changeProfile(_, { data, filter }) {
        const i = indexProfile(filter);
        if (i < 0) return null;
        profiles[i].name = data.name ? data.name : profiles[i].name;
        return profiles[i];
    },
};
