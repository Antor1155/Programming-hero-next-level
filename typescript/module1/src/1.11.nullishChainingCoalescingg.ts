{
// turnary operation 

const age =  25

const adult = age >= 18 ? "adutl" : "teen"

// nullish coalescing operator 

const present = null

const  presentUsingNullish = present ?? "absent"
const presentUsingTurnary = present ? present : "absent"

console.log({presentUsingNullish}, {presentUsingTurnary})

const p = false

const pUsingNullish = p ?? "villain"
const pUsingTrunary = p ? p : "villain"

console.log({pUsingNullish}, {pUsingTrunary})


const ob : {
    name: string,
    age: number,
    contact:{
        present : string,
        permanent ?: string,
    } 
} = {
    name: "antor",
    age: 25,
    contact : {
        present: "dhk"
    }
}

//best practice : optional chaining 
// nullish coalescing operaton based on null or undefined only
console.log(ob?.contact?.permanent ?? "permament address not present")











}