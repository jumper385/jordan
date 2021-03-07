export const zip = (a, b) => {
    return a.map((element, index) => {
        [element, b[index]]
    })
}