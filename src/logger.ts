export const logger = function (obj: any) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(`property: ${prop}`)
        }
    }
}

export const test = {
    action: "do",
    wait: 10
}
