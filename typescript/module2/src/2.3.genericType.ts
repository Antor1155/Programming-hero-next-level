{

    const anNumArr: number[] = [2, 5, 3, 3]
    const number: Array<number> = [2, 3, 5, 3]

    type GenericArr<T> = Array<T>

    const numArr: GenericArr<number> = [2, 3, 5, 3]
    const strArr: GenericArr<string> = ["x", "y", "z"]
    const boolArr: GenericArr<boolean> = [true, false, false, true]

    const objArr: GenericArr<{name: string, age: number,}> = [{
        name: "antor",
        age: 22
    },{
        name: "ano",
        age: 44,
    },{
        name: "nak",
        // age: "ate"
        age: 22
    }
    ]


    type GenericTuple<x, y> = [x, y]

    const asko : GenericTuple<number, string> = [2, "hello"]

    const kko : GenericTuple<number, {name: string, age: number,}> = [2322, {
        name: "antor",
        age: 99,
    }]

    type Myobj = {name: string, age: number,p: number}
    const kkoo : GenericTuple<number, Myobj> = [2322, {
        name: "antor",
        age: 99,
        p: 99
    }]



















}