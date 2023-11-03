"use strict";
{
    const info = {
        id: 2234,
        name: {
            firstName: "Azizul",
            middleName: "Hakim",
            lastName: "Antor",
        },
        constNum: 122343,
        friend: "cat"
    };
    const { id, name: { middleName: moddherNam }, friend } = info;
    console.log(id, moddherNam, friend);
    // array destructuring 
    const myFriends = ["ula", "vula", "sula", "zula", "mulla", "fulla", "gulla"];
    const [, , bestFriedn, ...rest] = myFriends;
    console.log(bestFriedn, rest);
    let l = [];
    l.push("hello", 33);
    console.log(l);
}
