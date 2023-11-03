"use strict";
{
    // using block scope, as ts finds for same funcitons,
    //  objects in other fiels of same directory     
    // spread operators
    const friends1 = ["kola", "vola", "sola"];
    const friends2 = ["mola", "zola", "kusum"];
    const allFriedns = [...friends1, ...friends2];
    const group1 = {
        a: "allu",
        b: "ballu",
        c: "sallu"
    };
    const group2 = {
        m: "mallu",
        n: "naga",
        o: "onto"
    };
    const allGroups = { group1, group2 };
    allGroups.group1.d = "balma";
    const groupsSpread = Object.assign(Object.assign({}, group1), group2);
    console.log(groupsSpread);
    // rest operator 
    function sayHalloTogether(fried1, firend2) {
        return `hellow, ${fried1} ${firend2}`;
    }
    console.log(sayHalloTogether("antor", "antu"));
    function seperateHello(...firends) {
        firends.forEach((friend) => {
            console.log(`hi ${friend}`);
        });
    }
    seperateHello(...allFriedns, "antor", "raza");
}
