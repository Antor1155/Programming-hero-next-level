"use strict";
var _a, _b;
{
    // turnary operation 
    const age = 25;
    const adult = age >= 18 ? "adutl" : "teen";
    // nullish coalescing operator 
    const present = null;
    const presentUsingNullish = present !== null && present !== void 0 ? present : "absent";
    const presentUsingTurnary = present ? present : "absent";
    console.log({ presentUsingNullish }, { presentUsingTurnary });
    const p = false;
    const pUsingNullish = p !== null && p !== void 0 ? p : "villain";
    const pUsingTrunary = p ? p : "villain";
    console.log({ pUsingNullish }, { pUsingTrunary });
    const ob = {
        name: "antor",
        age: 25,
        contact: {
            present: "dhk"
        }
    };
    //best practice : optional chaining 
    // nullish coalescing operaton based on null or undefined only
    console.log((_b = (_a = ob === null || ob === void 0 ? void 0 : ob.contact) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "permament address not present");
}
