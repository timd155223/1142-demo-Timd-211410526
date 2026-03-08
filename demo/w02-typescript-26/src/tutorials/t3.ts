/*******************************************/
// Type Alias

const john: { id: number; name: string; isActive: boolean } = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
    id: number;
    name: string;
    isActive: boolean;
} {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
}

console.log('createUser', createUser(john));
console.log('createUser', createUser(susan));

type User = { id: number; name: string; isActive: boolean };

const john2: User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan2: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser2_26(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
}

console.log('createUser2_26', createUser2_26(john2));
console.log('createUser2_26', createUser2_26(susan2));