export const totalPrice = (array: []): number => {
    let total: number = 0
    array.forEach((item: any) => {
        total += item.count * item.price
    })
    return total
}

export const totalCount = (array: []): number => {
    let total: number = 0
    array.forEach((item: any) => {
        total += item.count
    })
    return total
}

export const getClassName = (filterName:string, name: string, className:string): string => {
    let activeClass: string = ''
    if (filterName === name) {
        activeClass = `${className} ${className}_active`
    }
    return activeClass ? activeClass : className
}