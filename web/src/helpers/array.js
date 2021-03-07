export const zip = (a, b) => {
    return a.map((element, index) => {
        [element, b[index]]
    })
}

export const randomElement = (array) => {
    let index = Math.floor(Math.random()*array.length)
    return array[index]
}