const users = [
    { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
    { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
    { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
    { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

const getActiveUsers = (users) => {
    return users.filter(user => user.isActive);
};

const getUserNames = (users) => {
    return users.map(user => user.name);
};

const findUserById = (users, id) => {
    const user = users.find(user => user.id === id);
    return user ? user : null;
};

const getUsersStatistics = (users) => {
    const total = users.length;
    const active = users.filter(user => user.isActive).length;
    const inactive = total - active;
    
    return { total, active, inactive };
};

const getAverageAge = (users) => {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
};

const groupUsersByCity = (users) => {
    return users.reduce((a, user) => {
        if (!a[user.city]) {
            a[user.city] = [];
        }
        a[user.city].push(user);
        return a;
    }, {});
};

console.log(getActiveUsers(users));
console.log(getUserNames(users));
console.log(findUserById(users, 2));
console.log(getUsersStatistics(users));
console.log(getAverageAge(users));
console.log(groupUsersByCity(users));
