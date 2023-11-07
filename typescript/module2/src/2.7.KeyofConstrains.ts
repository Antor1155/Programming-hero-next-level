{
    type vahicle = {
        bike: string,
        car: string,
        ship: string,
    }


    type Owner = "bike" | "car" | "ship"
    type owner2 = keyof vahicle


    const o1 : Owner = "bike"

    const o2 : owner2 = "car"

    function ojbToVal<T, K extends keyof T> (obj: T, key: K) {
       let k = obj[key]

       return "returning : " + k
    }


    const vahicle1:vahicle = {
        bike: "have 1",
        car: "have 2",
        ship: "don't have"
    }
    const tv1 = ojbToVal(vahicle1, "bike")

    console.log(tv1)














}