const users = [];

function userJoin({ id, name, theater }) {
    name = name.trim();
    theater = theater.trim();

    const existingUser = users.find((user) =>
    user.theater === theater && user.name === name);

    if (existingUser) {
        return { error: 'Username is taken.'};
    }

    const user = { id, name, theater };

    users.push(user);

    return { user };
}

function userLeave(id) {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

function getUser(id) {
    const index = users.find((user) => user.id === id);

    if (index) {
        return index;
    }
}

function getTheaterUsers(theater) {
    users.filter((user) => user.theater === theater);
}

module.exports = { userJoin, userLeave, getUser, getTheaterUsers };