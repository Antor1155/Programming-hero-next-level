{
    type GenericObj<T, X=null> ={
        name: string,
        address: {
            city: string,
            road: string,
            roadNo: number,
        },
        computer: T,
        bike?: X,
    }

    type GenericProduct = {
        name?: string,
        model: string,
        price: number
    }

    const user1 : GenericObj<GenericProduct, GenericProduct> = {
        name: "antor",
        address: {
            city: "chat",
            road: "bera ",
            roadNo: 5,
        },
        computer: {
            name: "hp",
            model: "2x454",
            price: 332
        },
        bike:{
            model: "yamaha",
            price: 255
        }
    }


    interface GenericObj2<T, X=null> {
        name: string,
        address: {
            city: string,
            road: string,
            roadNo: number,
        },
        computer: T,
        bike?: X
    } 

    const user2: GenericObj2<GenericProduct, null> ={
        name: "antor",
        address: {
            city: "ola",
            road:"kla",
            roadNo: 22
        },
        computer: {
            name: "asus",
            price: 233,
            model: "k223"
        },
    }


    console.log(user1.bike)
    console.log(user2.computer)

















}