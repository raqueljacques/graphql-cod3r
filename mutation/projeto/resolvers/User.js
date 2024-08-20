const { profiles } = require("../data/db");

module.exports = {
    salary: (user) => user.salary_real,
    profile: (user) => {
        const selected = profiles.filter(
            (profile) => profile.id == user.profile_id
        );
        return selected ? selected[0] : null;
    },
};
